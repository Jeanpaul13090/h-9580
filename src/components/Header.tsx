
import { Menu, X, Twitch } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-purple-600/30">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/da714ca1-303b-4727-b1e3-ce08a43307e3.png" 
            alt="TwitchVOD24 Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white hidden sm:inline">Twitch<span className="text-purple-400">VOD24</span></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-300 hover:text-purple-400 transition-colors">
            {t('services')}
          </a>
          <a href="#testimonials" className="text-neutral-300 hover:text-purple-400 transition-colors">
            {t('testimonials')}
          </a>
          <a href="#pricing" className="text-neutral-300 hover:text-purple-400 transition-colors">
            {t('pricing')}
          </a>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              <Twitch size={18} />
              {t('getStarted')}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-b border-purple-600/30">
          <div className="container-padding py-4 flex flex-col gap-4">
            <a href="#features" className="text-neutral-300 hover:text-purple-400 transition-colors">
              {t('services')}
            </a>
            <a href="#testimonials" className="text-neutral-300 hover:text-purple-400 transition-colors">
              {t('testimonials')}
            </a>
            <a href="#pricing" className="text-neutral-300 hover:text-purple-400 transition-colors">
              {t('pricing')}
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 w-full justify-center">
              <Twitch size={18} />
              {t('getStarted')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
