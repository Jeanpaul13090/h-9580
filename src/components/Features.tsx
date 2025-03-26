import { Twitch, BarChart, Globe, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("feature1_title"),
      description: t("feature1_desc"),
      icon: Twitch,
    },
    {
      title: t("feature2_title"),
      description: t("feature2_desc"),
      icon: Clock,
    },
    {
      title: t("feature3_title"),
      description: t("feature3_desc"),
      icon: Globe,
    },
    {
      title: t("feature4_title"),
      description: t("feature4_desc"),
      icon: BarChart,
    },
  ];

  return (
    <section id="features" className="py-16 container-padding bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("features_title")}
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          {t("features_subtitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-purple-600 transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
