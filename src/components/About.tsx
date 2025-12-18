const About = () => {
  return (
    <>
      {/* Why Kerith Section */}
      <section id="why-kerith" className="py-16 sm:py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
              Why Kerith?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Where Intentionality Meets Inclusive Luxury
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Kerith & Co. Events stands apart by offering a planning experience defined by:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                "Calm, structured coordination",
                "Elegant design rooted in meaning",
                "Deep respect for diverse traditions and personal preferences",
                "A modern blend of planning + creative technology",
                "Personalized guest experience maps",
                "End-to-end support for every style, culture, and vision",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-gold text-lg sm:text-xl mt-0.5">✔</span>
                  <p className="text-sm sm:text-base text-foreground/80">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed mb-8 sm:mb-10 px-4">
              Whether you're hosting a classic wedding, a multicultural celebration, a modern corporate event, or an intimate milestone, we craft moments that feel authentically yours.
            </p>

            <div className="text-center">
              <a href="#about" className="inline-block text-gold hover:text-gold-dark transition-colors text-sm sm:text-base font-medium tracking-wide">
                Meet Your Planners →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
              About Kerith & Co. Events
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 sm:mb-8">
              About Kerith & Co. Events
            </h2>
            <div className="w-12 sm:w-16 h-px bg-gold mx-auto mb-8 sm:mb-10" />
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed px-4 text-left">
              <p>
                At Kerith & Co. Events, we believe true luxury isn't just how an event looks—it's how it feels.  
                We specialize in creating beautifully organized, intentionally designed celebrations that allow you to feel calm, supported, and completely present.
              </p>
              <p>
                We find joy in structure, planning, and checking every detail off the list. We founded Kerith & Co. with one goal: to bring peace of mind back into event planning. There is nothing more rewarding than watching a client's relief, happiness, and comfort when everything falls effortlessly into place.
              </p>
              <p>
                Every event we manage is curated with clarity, precision, and care. Whether you're celebrating a wedding, welcoming a new baby, or hosting a milestone gathering, we handle each moment with thoughtful coordination and a touch of modern elegance.
              </p>
              <p className="font-medium text-foreground text-center mt-8 sm:mt-10">
                At Kerith & Co., your joy is our purpose and your peace is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
              Meet the Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Meet the Team
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-background p-6 sm:p-8 border border-border">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                Cheryl Wirehene
              </h3>
              <p className="text-sm sm:text-base text-gold mb-4 font-medium">
                Lead Event Planner & Creative Director
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Cheryl leads planning, experience design, and creative direction, offering a calm, structured, and elegant approach to every celebration.
              </p>
            </div>

            <div className="bg-background p-6 sm:p-8 border border-border">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                Moses Arhinful Acquah
              </h3>
              <p className="text-sm sm:text-base text-gold mb-4 font-medium">
                Director of Operations & Creative Technology
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Moses integrates operations and digital innovation, offering clients custom event websites, digital invitations, QR systems, logos, monograms, signage, video displays, and technical support.
              </p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 sm:mt-12 text-sm sm:text-base px-4">
            Together, they bring an elevated, modern, and inclusive approach to luxury event planning.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
