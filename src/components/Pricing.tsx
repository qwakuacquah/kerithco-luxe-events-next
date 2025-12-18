import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packages = [
  {
    name: "Essential Package",
    description: "Perfect for intimate gatherings",
    features: [
      "Consultation",
      "Timeline creation",
      "Vendor recommendations",
      "Guest experience basics",
      "6-hour day-of coordination",
    ],
    highlight: false,
  },
  {
    name: "Signature Package",
    description: "Most Popular",
    features: [
      "Everything in Essential",
      "Full event design & styling",
      "Vendor management",
      "Unlimited consultations",
      "Full-day coordination",
      "Guest experience design",
    ],
    highlight: true,
  },
  {
    name: "Luxe Package",
    description: "The ultimate experience",
    features: [
      "Everything in Signature",
      "Event concierge services",
      "Multi-day support",
      "Destination planning",
      "VIP family assistance",
      "Dedicated planning team",
    ],
    highlight: false,
  },
];

const planningProcess = [
  "Discovery & Clarity Mapping",
  "Structured Planning Framework",
  "Design Development",
  "Vendor & Logistics Coordination",
  "Guest Experience Mapping",
  "Seamless Event Execution",
  "Post-Event Wrap-Up",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Planning Process Section */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
              Our Process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Signature Kerith Planning Experience™
            </h2>
          </div>
          <div className="bg-secondary/30 p-6 sm:p-8 border border-border">
            <ol className="space-y-3 sm:space-y-4">
              {planningProcess.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gold/30 text-gold text-sm sm:text-base font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm sm:text-base text-foreground/80 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Packages Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
            Investment
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Tailored packages designed to meet your unique needs. 
            Contact us for custom pricing based on your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 md:p-10 border ${
                pkg.highlight
                  ? "border-gold bg-secondary/20 shadow-elegant"
                  : "border-border bg-background"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gold text-background text-xs tracking-widest uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">{pkg.description}</p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.highlight ? "gold" : "luxury-outline"}
                className="w-full"
                asChild
              >
                <Link href="/booking">Inquire Now</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 sm:mt-12 text-xs sm:text-sm px-4">
          All packages are customizable. Schedule a consultation to discuss your specific needs.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
