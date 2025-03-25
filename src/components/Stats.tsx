
import { useLanguage } from "../contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      value: "99.9%",
      label: t('uptime'),
    },
    {
      value: "150+",
      label: t('countries'),
    },
    {
      value: "$2B+",
      label: t('processed'),
    },
    {
      value: "24/7",
      label: t('support'),
    },
  ];

  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto glass-card rounded-xl p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
