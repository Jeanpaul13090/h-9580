
import { ArrowRight, Twitch, Play, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-gradient-to-b from-neutral-900 to-purple-900/20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 rounded-full border border-purple-600/30 mb-6">
          <Twitch className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-200">Service de streaming Twitch 24/7</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Votre chaîne <span className="text-purple-400">Twitch</span> en continu, sans effort avec des revenus passifs
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Transformez votre contenu existant en une chaîne de diffusion 24h/24 qui génère des revenus et augmente votre audience, sans aucun effort supplémentaire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            Commencer maintenant
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            Voir les démos
            <Play className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Diffusion 24h/24 et 7j/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Twitch className="w-4 h-4 text-purple-400" />
            <span>Intégration native Twitch</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-purple-400" />
            <span>Revenus passifs garantis</span>
          </div>
        </div>
      </div>
      
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float border border-purple-600/30 bg-neutral-900/60">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Tableau de bord de diffusion Twitch"
            className="rounded-lg w-full"
          />
          <div className="absolute -top-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Twitch className="w-4 h-4" />
            <span className="font-bold">LIVE 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
