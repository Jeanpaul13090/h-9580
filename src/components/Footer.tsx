
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">Tarification</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Partenariats</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Conditions</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">
            © 2024 StreamAuto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
