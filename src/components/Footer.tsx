import { useLanguage } from "../contexts/LanguageContext";
import {
  LayoutDashboard,
  Users,
  HelpCircle,
  Mail,
} from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* Colonne 1 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-purple-400" />
                <a
                  href="#features"
                  className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300"
                >
                  {t("services")}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <a
                  href="#testimonials"
                  className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300"
                >
                  {t("testimonials")}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <a
                  href="#faq"
                  className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300"
                >
                  {t("footer_faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="#contact"
                  className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300"
                >
                  {t("footer_contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation stylisée */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500/20 via-white/10 to-purple-500/20 my-8 rounded-full" />

        {/* Bas de page */}
        <div className="max-w-4xl mx-auto pt-4 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 StreamAuto. Créé avec{" "}
            <span className="animate-pulse text-red-500" style={{ animationDuration: "1.5s" }}>❤️</span> par Thomas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
