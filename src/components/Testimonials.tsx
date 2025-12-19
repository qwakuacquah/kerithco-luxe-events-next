import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I asked for simplicity and elegance, and Cheryl brought it to life effortlessly. She is patient, organized, and a true listener. Every detail reflected who we are as a couple. I would choose Kerith & Co. a thousand times again.",
    name: "Abigail A.",
    event: "Elegant Traditional Wedding (Ghana)",
  },
  {
    quote:
      "Cheryl was the backbone of our wedding. She coordinated vendors with confidence, managed the day with grace, and handled every detail with precision. My family still talks about how smoothly everything flowed. Cheryl doesn't just plan events — she brings structure, peace, and excellence.",
    name: "Faustina A.",
    event: "Classic Ceremony & Reception (Ghana)",
  },
  {
    quote:
      "As a Pakistani Muslim bride, I wanted a planner who would truly respect and understand my traditions. Cheryl exceeded every expectation. She asked thoughtful questions, honored our culture, and created an event that felt beautifully personal without ever feeling forced. I recommend Kerith & Co. to anyone who wants a planner who genuinely cares.",
    name: "Famia C.",
    event: "Pakistani Muslim Wedding",
  },
  {
    quote:
      "Planning a wedding abroad is stressful, but Kerith & Co. made everything unbelievably easy. Cheryl managed logistics, communication, and design with complete professionalism, turning a complex destination wedding into a smooth and beautiful experience. She understood my vision immediately and delivered beyond what I imagined. We still talk about how seamless the day felt.",
    name: "Olivia A.",
    event: "Destination Wedding (China)",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
            Client Love
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            The greatest reward is seeing our clients' dreams come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-6 sm:p-8 md:p-10 border border-border"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold/40 mb-4 sm:mb-6" strokeWidth={1} />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4 sm:pt-6">
                <p className="font-serif text-base sm:text-lg text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gold">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
