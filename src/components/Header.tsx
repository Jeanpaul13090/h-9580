
import { Menu, X, Twitch } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-purple-600/30">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/60224db4-5ea4-4f91-8035-449dcb073d30.png" 
            alt="Twitch 24/24 Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white hidden sm:inline">Twitch<span className="text-purple-400">24/24</span></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-300 hover:text-purple-400 transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-neutral-300 hover:text-purple-400 transition-colors">
            Témoignages
          </a>
          <a href="#pricing" className="text-neutral-300 hover:text-purple-400 transition-colors">
            Tarification
          </a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
            <Twitch size={18} />
            Démarrer
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-b border-purple-600/30">
          <div className="container-padding py-4 flex flex-col gap-4">
            <a href="#features" className="text-neutral-300 hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-neutral-300 hover:text-purple-400 transition-colors">
              Témoignages
            </a>
            <a href="#pricing" className="text-neutral-300 hover:text-purple-400 transition-colors">
              Tarification
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 w-full justify-center">
              <Twitch size={18} />
              Démarrer
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
