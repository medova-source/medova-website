import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Building2, Handshake, Award } from "lucide-react";
import { useEffect } from "react";
import macky from "@/assets/macky.jpeg";
import darshan from "@/assets/dar.jpeg";
import aboutbg from "@/assets/about.png";

const partners = [
  {
    name: "Ministry of Health Partners",
    description:
      "Collaborating with government health ministries across multiple countries to support national healthcare programs.",
  },
  {
    name: "Hospital Networks",
    description:
      "Serving major hospital systems and healthcare facilities with reliable supply chain solutions.",
  },
  {
    name: "Qualified Manufacturers",
    description:
      "Partnering with certified manufacturers in India and other key production hubs for quality-assured products.",
  },
  {
    name: "Distribution Networks",
    description:
      "Working with major distributors to ensure efficient last-mile delivery across diverse markets.",
  },
];

const leadership = [
  {
    name: "Macky Pannu",
    title: "Chief Executive Officer",
    bio: "Macky Pannu is a highly experienced real estate developer, healthcare investor, and international business operator with more than 13 years of experience leading complex projects across medical, multifamily, mixed-use, and commercial real estate. He is particularly known for his deep, hands-on expertise in the medical field, having developed, built, and operated urgent care centers, outpatient medical facilities, and healthcare-anchored developments",
    initials: "MP",
    image: macky,
  },
  {
    name: "Darshan Patel",
    title: "Founder & Principal",
    bio: "Darshan Patel is a global healthcare entrepreneur and operator with extensive experience across medical supply chains, pharmaceutical sourcing, healthcare distribution, and international trade. He is the Founder and Managing Principal of Inthera Global Group, the parent entity behind Medova, a unified global healthcare solutions brand. Mr. Patel brings a pragmatic, execution-driven approach to building scalable platforms that solve complex operational challenges.",
    initials: "DP",
    image: darshan,
  },
];

const About = () => {
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
            src={aboutbg} // Ensure you import this image at the top of your file
            alt="About Medova Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay: This keeps your original brand colors while showing the image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/75" />
        </div>

        {/* Your Original Content Structure */}
        <div className="container relative z-10 mx-auto container-padding text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              About Medova
            </span>
          </div>
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up stagger-1 max-w-4xl mx-auto">
            Advancing Global Healthcare Through{" "}
            <span className="text-accent">Unified Solutions</span>
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-up stagger-2 leading-relaxed">
            A globally-oriented healthcare brand dedicated to simplifying and
            elevating how healthcare resources are delivered, managed, and
            optimized worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Medova is a globally-oriented healthcare brand dedicated to
                advancing the quality, accessibility, and reliability of medical
                solutions around the world. As a singular platform that
                seamlessly integrates medical disposables, pharmaceutical
                products, advanced medical equipment, and comprehensive
                healthcare software, Medova stands at the intersection of
                innovation, trust, and total care delivery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a singular purpose: to simplify and elevate the way
                healthcare resources are delivered, managed, and
                optimized—across providers, facilities, governments, and
                patients. In an era where the demands on healthcare systems are
                increasingly complex, Medova serves as an agile, dependable
                partner with a wide spectrum of offerings designed to meet the
                needs of modern healthcare ecosystems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Medova is an international healthcare sourcing and supply
                company that works with large institutional clients and
                government entities to secure medicines and medical disposables
                across multiple markets. We collaborate with ministries of
                health, public health systems, hospitals, and major distributors
                in different countries to support their pharmaceutical and
                medical supply needs through compliant, reliable, and
                well-structured procurement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card-elevated p-8 lg:p-12">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="heading-md text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower healthcare providers and systems worldwide with
                integrated, reliable, and innovative solutions—enabling better
                care, improved outcomes, and stronger health systems.
              </p>
            </div>

            <div className="card-elevated p-8 lg:p-12">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="heading-md text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every healthcare need—whether disposables,
                medicines, equipment, or digital systems—is met through a
                unified, dependable partner committed to excellence and patient
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Our Partners
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Strategic <span className="text-primary">Partnerships</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with diverse stakeholders across the healthcare ecosystem
              to deliver comprehensive solutions worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="card-elevated p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-slate-50/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 shadow-sm text-primary text-xs uppercase tracking-widest font-bold mb-6">
              <Award className="w-3.5 h-3.5" />
              The Executive Board
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Meet Our{" "}
              <span className="italic text-primary/80 font-medium">
                Leaders
              </span>
            </h2>
            <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Experienced professionals committed to transforming global
              healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className="group relative h-[450px] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl transition-all duration-700 hover:-translate-y-2"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
                  <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs text-white uppercase tracking-[0.2em] text-primary font-bold mb-2">
                      {leader.title}
                    </p>
                    <h3 className="text-3xl font-serif mb-4 tracking-tight">
                      {leader.name}
                    </h3>

                    {/* Bio: Hidden by default, slides up on hover */}
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-72 group-hover:opacity-100">
                      <div className="w-12 h-[1px] bg-primary/50 mb-4" />
                      <p className="text-sm text-slate-200 leading-relaxed font-light italic">
                        "{leader.bio}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
