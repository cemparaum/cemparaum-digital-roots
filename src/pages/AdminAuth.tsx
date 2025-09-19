import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseAdmin } from '@/integrations/supabase/adminClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { User, Session } from '@supabase/supabase-js';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabaseAdmin.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check if user is admin and redirect
          setTimeout(() => {
            checkAdminAndRedirect(session.user.id);
          }, 0);
        }
      }
    );

    // Check for existing session
    supabaseAdmin.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminAndRedirect(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminAndRedirect = async (userId: string) => {
    try {
      const { data, error } = await supabaseAdmin
        .from('admin_users')
        .select('id')
        .eq('user_id', userId)
        .single();
      
      if (data && !error) {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabaseAdmin.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          toast({
            title: "Erro no login",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Login realizado com sucesso",
            description: "Redirecionando para o painel...",
          });
        }
      } else {
        const redirectUrl = `${window.location.origin}/admin/auth`;
        
        const { data, error } = await supabaseAdmin.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl
          }
        });

        if (error) {
          toast({
            title: "Erro no cadastro",
            description: error.message,
            variant: "destructive",
          });
        } else if (data.user) {
          // Create admin user record
          const { error: adminError } = await supabaseAdmin
            .from('admin_users')
            .insert({
              user_id: data.user.id,
              email: email
            });

          if (adminError) {
            console.error('Error creating admin user:', adminError);
          }

          toast({
            title: "Cadastro realizado",
            description: "Verifique seu email para confirmar a conta.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabaseAdmin.auth.signOut();
    setEmail('');
    setPassword('');
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Painel Administrativo</CardTitle>
            <CardDescription>Logado como: {user.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => navigate('/admin/dashboard')} className="w-full">
              Acessar Dashboard
            </Button>
            <Button onClick={handleLogout} variant="outline" className="w-full">
              Sair
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Admin - 100:1</CardTitle>
          <CardDescription>
            {isLogin ? 'Faça login para acessar o painel' : 'Crie uma conta de administrador'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@100para1.com.br"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Cadastrar')}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Criar conta de admin' : 'Já tenho conta'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;