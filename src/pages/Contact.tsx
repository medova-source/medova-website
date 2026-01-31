import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageSquare, Globe, Clock } from "lucide-react";
import { useEffect } from "react";
import contactbg from "@/assets/contact.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactbg} // Ensure you import your contact background image at the top
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay: Preserves your primary brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/75" />
        </div>

        {/* Your Original Content Structure */}
        <div className="container relative z-10 mx-auto container-padding text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Contact Us
            </span>
          </div>
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up stagger-1 max-w-4xl mx-auto">
            Let's Start a <span className="text-accent">Conversation</span>
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-up stagger-2 leading-relaxed">
            We're here to help you find the right healthcare solutions. Reach
            out to discuss your needs with our team.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="heading-md text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a healthcare provider, government entity, or
                  distributor, we're ready to discuss how Medova can support
                  your needs.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      Office Location
                    </h3>
                    <p className="text-muted-foreground">
                      740 Veterans Memorial Hwy SE
                      <br />
                      Mableton, GA 30126, USA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      Email
                    </h3>
                    <a
                      href="mailto:Info@medovahealthcare.com"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      Info@medovahealthcare.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      Website
                    </h3>
                    <a
                      href="https://medovahealthcare.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      medovahealthcare.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      Phone
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      Macky Pannu
                    </p>
                    <a
                      href="tel:+16789945719"
                      className="text-muted-foreground hover:text-primary transition-colors block mb-2"
                    >
                      +1 (678) 994-5719
                    </a>
                    <p className="text-muted-foreground text-sm mb-1">
                      Darshan Patel
                    </p>
                    <a
                      href="tel:+16784807168"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      +1 (678) 480-7168
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="space-y-6">
              <h2 className="heading-md text-foreground">Our Location</h2>
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145751.90957690743!2d-84.64764177994417!3d33.81060933127352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f519779420475f%3A0xf8682b9f30ef8d46!2s740%20Veterans%20Memorial%20Hwy%20SE%2C%20Mableton%2C%20GA%2030126%2C%20USA!5e0!3m2!1sen!2sin!4v1769570102256!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Global Presence
              </h3>
              <p className="text-muted-foreground">
                Serving 50+ countries with local support and expertise
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                24/7 Support
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance for urgent healthcare needs
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Quick Response
              </h3>
              <p className="text-muted-foreground">
                We respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
