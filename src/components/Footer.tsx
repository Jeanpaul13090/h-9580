
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t('footer_service')}</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-300 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">{t('pricing')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_faq')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer_company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_about')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_contact')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_partnerships')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer_resources')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_guides')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_support')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer_legal')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_privacy')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_terms')}</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">{t('footer_cookies')}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">
            {t('footer_copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
