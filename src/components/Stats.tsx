import { useLanguage } from "../contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      value: "8760h",
      label: t("in 1 year"),
    },
    {
      value: "150+",
      label: t("countries"),
    },
    {
      value: "$100k+",
      label: t("Generated in 2024"),
    },
    {
      value: "24/7",
      label: t("Online"),
    },
  ];

  return (
    <section className="py-16 container-padding bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto glass-card rounded-xl p-12 bg-neutral-800 border border-neutral-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

