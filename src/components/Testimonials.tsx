import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonial1"),
      author: "AkuASMR",
      role: t("role_streamer_asmr"),
      avatar: "/image/Aku.png",
      url: "https://www.twitch.tv/akuasmr",
      followers: "624,5 k followers",
    },
    {
      quote: t("testimonial2"),
      author: "Talmo",
      role: t("role_streamer_fps"),
      avatar: "/image/Talmo.jpg",
      url: "https://www.twitch.tv/talmo",
      followers: "956,5 k followers",
    },
    {
      quote: t("testimonial3"),
      author: "IJenz",
      role: t("role_streameuse_jc"),
      avatar: "/image/Jenz.png",
      url: "https://www.twitch.tv/ijenzlive",
      followers: "69,9 k followers",
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

        <div className="grid md:grid-cols-3 gap-8 group">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out 
                         group-hover:[&:not(:hover)]:scale-75 hover:scale-125"
            >
              <div className="glass-card p-6 rounded-xl bg-neutral-800 border border-neutral-700 hover:ring-1 hover:ring-purple-500">
                <p className="text-neutral-300 mb-6">{testimonial.quote}</p>

                <div className="flex items-start gap-3">
                  {/* Avatar + LIVE */}
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-xs text-white px-1.5 py-[2px] rounded-sm font-bold">
                      LIVE
                    </span>
                  </div>

                  {/* Infos */}
                  <div>
                    <div className="flex items-center">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <img
                        src="/image/verified2.png"
                        alt="Verified"
                        className="w-8 object-contain ml-1"
                      />
                    </div>
                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                    <p className="text-sm text-neutral-500">{testimonial.followers}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
