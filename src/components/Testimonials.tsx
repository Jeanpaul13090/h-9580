
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonial1"),
      author: "AkuASMR",
      role: t("role_streamer_asmr"),
      avatar: "/image/Aku.png",
    },
    {
      quote: t("testimonial2"),
      author: "Talmo",
      role: t("role_streamer_fps"),
      avatar: "/image/Talmo.jpg",
    },
    {
      quote: t("testimonial3"),
      author: "IJenz",
      role: t("role_streameuse_jc"),
      avatar: "/image/Jenz.png",
    },
  ];

  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("testimonials_title")}
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          {t("testimonials_subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl bg-neutral-800 border border-neutral-700">
              <p className="text-neutral-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {/* LIVE badge sous l'avatar */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-xs text-white px-1.5 py-[2px] rounded-sm font-bold">
                    LIVE
                  </span>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    {/* Badge vérifié Twitch */}
                    <img src="/image/verified2.png" alt="Verified"  className="w-8 object-contain"/>
                  </div>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
