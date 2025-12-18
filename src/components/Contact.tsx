"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useEmail } from "@/hooks/use-email";
import { Mail, Phone, MapPin } from "lucide-react";
import { EVENT_TYPES, BUDGET_RANGES } from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const { sendContact, isLoading } = useEmail();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budgetRange: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    // Allow various phone formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890, etc.
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await sendContact(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out! We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", phone: "", eventType: "", eventDate: "", budgetRange: "", message: "" });
        setErrors({});
      } else {
        toast({
          title: "Error",
          description: response.error || "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
                Let's Create Something Beautiful
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                We'd love to hear about your upcoming celebration.  
                Share your vision below and we'll begin crafting an elegant, organized, and meaningful experience.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                    <Mail size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <a href="mailto:hello@kerithandco.com" className="text-sm sm:text-base text-foreground hover:text-gold transition-colors break-all">
                      hello@kerithandco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-sm sm:text-base text-foreground hover:text-gold transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <p className="text-sm sm:text-base text-foreground">Available Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background p-6 sm:p-8 md:p-10 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="text-sm text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    required
                    className="bg-transparent border-border focus:border-gold"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    required
                    className="bg-transparent border-border focus:border-gold"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="text-sm text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className="bg-transparent border-border focus:border-gold"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" className="text-sm text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-event-type" className="text-sm text-muted-foreground mb-2 block">
                    Event Type
                  </label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => {
                      setFormData({ ...formData, eventType: value });
                      if (errors.eventType) setErrors({ ...errors, eventType: "" });
                    }}
                  >
                    <SelectTrigger
                      id="contact-event-type"
                      className="bg-transparent border-border focus:border-gold"
                      aria-invalid={!!errors.eventType}
                    >
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {EVENT_TYPES.map((eventType) => (
                        <SelectItem key={eventType} value={eventType}>
                          {eventType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p id="contact-event-type-error" className="text-sm text-destructive mt-1">
                      {errors.eventType}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-event-date" className="text-sm text-muted-foreground mb-2 block">
                    Event Date
                  </label>
                  <Input
                    id="contact-event-date"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => {
                      setFormData({ ...formData, eventDate: e.target.value });
                      if (errors.eventDate) setErrors({ ...errors, eventDate: "" });
                    }}
                    className="bg-transparent border-border focus:border-gold"
                    aria-invalid={!!errors.eventDate}
                    aria-describedby={errors.eventDate ? "contact-event-date-error" : undefined}
                  />
                  {errors.eventDate && (
                    <p id="contact-event-date-error" className="text-sm text-destructive mt-1">
                      {errors.eventDate}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-budget-range" className="text-sm text-muted-foreground mb-2 block">
                    Budget Range
                  </label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => {
                      setFormData({ ...formData, budgetRange: value });
                      if (errors.budgetRange) setErrors({ ...errors, budgetRange: "" });
                    }}
                  >
                    <SelectTrigger
                      id="contact-budget-range"
                      className="bg-transparent border-border focus:border-gold"
                      aria-invalid={!!errors.budgetRange}
                    >
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUDGET_RANGES.map((budgetRange) => (
                        <SelectItem key={budgetRange} value={budgetRange}>
                          {budgetRange}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budgetRange && (
                    <p id="contact-budget-range-error" className="text-sm text-destructive mt-1">
                      {errors.budgetRange}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    required
                    rows={5}
                    className="bg-transparent border-border focus:border-gold resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button 
                  variant="luxury" 
                  size="lg" 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
