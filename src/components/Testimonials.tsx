
const testimonials = [
  {
    quote: "Depuis que j'ai lancé ma chaîne secondaire avec ce service, mes revenus ont augmenté de 30% sans aucun effort supplémentaire.",
    author: "MathieuGaming",
    role: "Streamer ASMR",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "La mise en place a été incroyablement simple, et maintenant j'ai une audience qui me regarde 24h/24, même quand je dors.",
    author: "EmmaPlay",
    role: "Streameuse Just Chatting",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote: "Le suivi des performances est transparent et les revenus passifs ont transformé mon activité de streaming.",
    author: "ThomasGG",
    role: "Streamer FPS",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ce que disent les streamers
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Rejoignez des streamers qui ont déjà transformé leur stratégie sur Twitch.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
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
