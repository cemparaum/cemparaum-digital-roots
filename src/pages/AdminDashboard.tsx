import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseAdmin } from '@/integrations/supabase/adminClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { User, Session } from '@supabase/supabase-js';
import { Badge } from '@/components/ui/badge';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string | null;
  message: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabaseAdmin.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate('/admin/auth');
        } else {
          setTimeout(() => {
            checkAdminStatus(session.user.id);
          }, 0);
        }
      }
    );

    // Check for existing session
    supabaseAdmin.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/admin/auth');
      } else {
        checkAdminStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabaseAdmin
        .from('admin_users')
        .select('id')
        .eq('user_id', userId)
        .single();
      
      if (data && !error) {
        setIsAdmin(true);
        loadContacts();
      } else {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar esta área.",
          variant: "destructive",
        });
        navigate('/admin/auth');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      navigate('/admin/auth');
    } finally {
      setLoading(false);
    }
  };

  const loadContacts = async () => {
    try {
      const { data, error } = await supabaseAdmin
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erro",
          description: "Não foi possível carregar os contatos.",
          variant: "destructive",
        });
      } else {
        setContacts(data || []);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const handleLogout = async () => {
    await supabaseAdmin.auth.signOut();
    navigate('/admin/auth');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Carregando...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Administrativo</h1>
            <p className="text-muted-foreground">Gerencie os contatos recebidos pelo site</p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-muted-foreground">
              Logado como: {user?.email}
            </span>
            <Button onClick={handleLogout} variant="outline">
              Sair
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contatos Recebidos</CardTitle>
            <CardDescription>
              Total de {contacts.length} contatos registrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Serviço</TableHead>
                    <TableHead>Mensagem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="text-sm">
                        {formatDate(contact.created_at)}
                      </TableCell>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>
                        {contact.company ? (
                          <Badge variant="outline">{contact.company}</Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {contact.service ? (
                          <Badge variant="secondary">{contact.service}</Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="max-w-xs truncate" title={contact.message}>
                        {contact.message}
                      </TableCell>
                    </TableRow>
                  ))}
                  {contacts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        Nenhum contato registrado ainda.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
