
import { ArrowRight, Twitch } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Votre chaîne Twitch en continu, sans effort et avec des revenus passifs
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Transformez votre contenu existant en une chaîne de diffusion 24h/24 qui génère des revenus et augmente votre audience, sans aucun effort supplémentaire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Commencer maintenant
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            En savoir plus
            <Twitch className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Tableau de bord de diffusion"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
