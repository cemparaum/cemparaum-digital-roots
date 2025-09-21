import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Idealmente, você poderia registrar este evento em uma ferramenta de analytics
    console.error(`Erro 404: O usuário tentou acessar uma rota inexistente: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-montserrat font-extrabold text-accent drop-shadow-lg">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-montserrat font-bold text-title">
            Oops! Página não encontrada.
          </h2>
          <p className="text-lg text-foreground/80 font-work-sans max-w-md mx-auto">
            Parece que o caminho que você tentou acessar não existe. Que tal voltar para um lugar seguro?
          </p>
        </div>
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors hover-glow"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
