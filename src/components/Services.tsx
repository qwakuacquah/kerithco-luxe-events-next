import { Heart, Baby, Users, Briefcase, Sparkles, CheckCircle2, Calendar, Handshake, Lightbulb, Shield, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mainServices = [
  {
    icon: Heart,
    title: "Weddings",
    subtitle: "Timeless. Refined. Seamlessly coordinated.",
    description: "Your wedding should feel as beautiful as it looks—which is why we prioritize clarity, smooth transitions, and thoughtful design at every step. From intimate ceremonies to multi-day celebrations, we guide you through a calm and organized process that brings your vision to life.",
    bestFor: [
      "Classic weddings",
      "Modern weddings",
      "Intimate weddings",
      "Fusion/mixed-tradition weddings",
      "Destination or multi-day events",
    ],
    cta: "Explore Wedding Packages",
    ctaLink: "#pricing",
  },
  {
    icon: Baby,
    title: "Motherhood & Family Celebrations",
    subtitle: "Warm, meaningful events honoring life's sweetest moments.",
    description: "",
    includes: [
      "Baby Showers",
      "Gender Reveals",
      "Sip & Sees",
      "First Birthdays",
    ],
    cta: "Plan Your Celebration",
    ctaLink: "/booking",
  },
  {
    icon: Users,
    title: "Social & Milestone Events",
    subtitle: "Beautiful experiences for every chapter of life.",
    description: "",
    eventTypes: [
      "Dinner parties",
      "Milestone birthdays",
      "Anniversaries",
      "Engagement parties",
      "Graduations",
    ],
    cta: "Start Planning",
    ctaLink: "/booking",
  },
  {
    icon: Briefcase,
    title: "Corporate & Professional Events",
    subtitle: "Structured, polished, and professionally executed.",
    description: "",
    includes: [
      "Galas",
      "Conferences",
      "Corporate dinners",
      "Launch events",
      "Holiday celebrations",
    ],
    cta: "View Corporate Services",
    ctaLink: "/booking",
  },
];

const premiumServices = [
  {
    icon: Sparkles,
    title: "Guest Experience & Event Process Design™",
    subtitle: "Crafting moments that feel effortless from start to finish.",
    includes: [
      "Guest flow & movement design",
      "Lighting, sound & sensory planning",
      "Event timing & experience rhythm",
      "Comfort and accessibility strategy",
      "Personalized touchpoint design",
    ],
    cta: "Enhance Your Event Experience",
    ctaLink: "/booking",
  },
  {
    icon: Handshake,
    title: "Event Concierge Services",
    subtitle: "White-glove support for hosts, families & guests.",
    includes: [
      "RSVP management",
      "Seating & floorplan strategy",
      "Guest travel recommendations",
      "Transportation coordination",
      "Family support assistance",
      "Vendor hospitality & communication",
    ],
    cta: "Add Concierge Services",
    ctaLink: "/booking",
  },
  {
    icon: CheckCircle2,
    title: "Luxury Intimate Events",
    subtitle: "Where detail and elegance shine.",
    perfectFor: [
      "Micro-weddings",
      "Vow renewals",
      "Luxury dinner parties",
      "Private milestone events",
    ],
    cta: "Plan an Intimate Event",
    ctaLink: "/booking",
  },
  {
    icon: Lightbulb,
    title: "Event Operations Consulting",
    subtitle: "For churches, nonprofits, and small businesses.",
    includes: [
      "Event workflow creation",
      "Volunteer/staff training",
      "Planning templates & SOPs",
      "Scheduling & coordination systems",
      "Event-day operations consulting",
    ],
    cta: "Request a Consultation",
    ctaLink: "/booking",
  },
  {
    icon: Shield,
    title: "Stress-Free & Neuro-Inclusive Planning™",
    subtitle: "Clarity, structure, and gentle guidance.",
    includes: [
      "Step-by-step structure",
      "Clear communication",
      "Low-stress timelines",
      "Sensory-friendly environments",
      "Emotionally supportive planning",
    ],
    cta: "Learn More",
    ctaLink: "/booking",
  },
  {
    icon: UserCheck,
    title: "Personal Event Planning for Busy Professionals",
    subtitle: "Ongoing, VIP-style event support.",
    includes: [
      "Birthdays",
      "Anniversaries",
      "Holidays",
      "Family events",
      "Special surprises",
    ],
    cta: "Join the VIP Program",
    ctaLink: "/booking",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-4 mb-2">
            Elegant. Organized. Intentional.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-4">
            Whether you're planning a wedding, celebrating life's milestones, or hosting a professional gathering, we bring structure, beauty, and a calming, supportive experience to every event.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-4 mt-4">
            We proudly serve clients from all walks of life and design events that honor a wide range of styles, preferences, and personal stories.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto bg-secondary/30 p-6 sm:p-8 md:p-10 border border-border"
            >
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gold mb-3 sm:mb-4 italic">
                    {service.subtitle}
                  </p>
                  {service.description && (
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>

              {(service.bestFor || service.includes || service.eventTypes) && (
                <div className="ml-16 sm:ml-20 mb-4 sm:mb-6">
                  {service.bestFor && (
                    <>
                      <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
                        Best For:
                      </p>
                      <ul className="space-y-2">
                        {service.bestFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold text-sm sm:text-base mt-0.5">✔</span>
                            <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {service.includes && (
                    <>
                      <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold text-sm sm:text-base mt-0.5">✔</span>
                            <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {service.eventTypes && (
                    <>
                      <p className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
                        Event Types:
                      </p>
                      <ul className="space-y-2">
                        {service.eventTypes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold text-sm sm:text-base mt-0.5">✔</span>
                            <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              <div className="ml-16 sm:ml-20">
                <Button variant="luxury-outline" size="sm" asChild>
                  <Link href={service.ctaLink}>{service.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Signature Services */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Premium Signature Services
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
              Premium Signature Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {premiumServices.map((service, index) => (
              <div
                key={index}
                className="bg-secondary/30 p-6 sm:p-8 border border-border hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gold mb-3 italic">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {(service.includes || service.perfectFor) && (
                  <div className="ml-14 sm:ml-16 mb-4">
                    {service.includes && (
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold text-sm mt-0.5">✔</span>
                            <span className="text-sm text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {service.perfectFor && (
                      <>
                        <p className="text-xs font-medium text-foreground mb-2 mt-3">
                          Perfect for:
                        </p>
                        <ul className="space-y-2">
                          {service.perfectFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-gold text-sm mt-0.5">✔</span>
                              <span className="text-sm text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}

                <div className="ml-14 sm:ml-16">
                  <Button variant="luxury-outline" size="sm" asChild>
                    <Link href={service.ctaLink}>{service.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Design & Tech */}
        <div className="max-w-4xl mx-auto mt-16 sm:mt-20 bg-secondary/30 p-6 sm:p-8 md:p-10 border border-border">
          <div className="text-center mb-6 sm:mb-8">
            <Calendar className="w-12 h-12 sm:w-14 sm:h-14 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
              Event Digital Design & Tech Enhancements
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Custom event logos & monograms",
              "Digital & printable invitations",
              "Event websites & landing pages",
              "QR codes (RSVPs, menus, programs)",
              "Digital seating charts",
              "Tribute & anniversary videos",
              "Custom signage",
              "On-site tech support (optional)",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-gold text-sm sm:text-base mt-0.5">✔</span>
                <span className="text-sm sm:text-base text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
