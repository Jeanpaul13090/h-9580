
import { Check, Twitch, BarChart, Globe, Clock } from "lucide-react";

const features = [
  {
    title: "Gestion complète de votre chaîne secondaire",
    description: "Mise en place et gestion complète de votre chaîne secondaire sans aucun effort de votre part.",
    icon: Twitch,
  },
  {
    title: "Automatisation des rediffusions",
    description: "Hébergement, déploiement des serveurs et automatisation des rediffusions de vos contenus.",
    icon: Clock,
  },
  {
    title: "Rotation stratégique des VODs",
    description: "Mise à jour et rotation stratégique de vos VODs pour maintenir votre audience engagée.",
    icon: Globe,
  },
  {
    title: "Suivi des performances",
    description: "Rapports détaillés et optimisation continue pour maximiser vos revenus passifs.",
    icon: BarChart,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tout ce dont vous avez besoin pour développer votre présence sur Twitch
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Je m'occupe de tout pour que vous puissiez vous concentrer uniquement sur la création de votre contenu principal.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
