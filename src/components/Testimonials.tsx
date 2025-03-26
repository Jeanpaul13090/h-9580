
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonial1"),
      author: "MathieuGaming",
      role: t("role_streamer_asmr"),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      quote: t("testimonial2"),
      author: "EmmaPlay",
      role: t("role_streameuse_jc"),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote: t("testimonial3"),
      author: "ThomasGG",
      role: t("role_streamer_fps"),
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
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
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
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
