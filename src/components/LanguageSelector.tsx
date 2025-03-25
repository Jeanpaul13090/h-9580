
import { Globe, Flag } from "lucide-react";
import { useLanguage, Language } from "../contexts/LanguageContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors">
        <Globe size={16} />
        <span className="hidden sm:inline">{language.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-800 border-purple-600/30 text-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 ${
              language === lang.code ? 'text-purple-400' : 'text-white'
            } hover:text-purple-400 hover:bg-neutral-700 cursor-pointer`}
            onClick={() => setLanguage(lang.code as Language)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
