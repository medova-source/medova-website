import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Package,
  Pill,
  Activity,
  Monitor,
  Layers,
  Globe,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import dis from "@/assets/dis.png";
import phar from "@/assets/phar.png";
import med from "@/assets/med.png";
import end from "@/assets/end.png";
import int from "@/assets/int.png";
import reg from "@/assets/reg.png";
import servicesbg from "@/assets/services.png";
import global from "@/assets/global.png";
import { useEffect } from "react";

const services = [
  {
    icon: Package,
    image: dis,
    title: "Medical Disposables & Consumables Supply",
    description:
      "Comprehensive portfolio of high-quality medical disposables essential for daily clinical operations and large-scale healthcare programs.",
    details: [
      "Syringes, needles, gloves (nitrile, latex, vinyl)",
      "Dressings, gauze, bandages, IV sets",
      "Catheters, cannulas, PPE products",
      "Procedure-specific kits with custom packaging",
    ],
    fullDescription:
      "Medova supplies a comprehensive portfolio of high-quality medical disposables essential for daily clinical operations and large-scale healthcare programs. Our products meet international quality standards (FDA, CE, ISO-compliant sourcing), ensuring reliable bulk supply for hospitals and government tenders with cost-optimized procurement without quality compromise. We also offer custom packaging and private-label options.",
    idealFor:
      "Hospitals, clinics, distributors, emergency response units, ministries of health",
  },
  {
    icon: Pill,
    image: phar,
    title: "Pharmaceutical & Medicine Sourcing",
    description:
      "Access to a broad range of pharmaceutical products, ensuring consistent availability of essential and specialty medicines.",
    details: [
      "Essential medicines and injectable formulations",
      "Critical care drugs and oral medications",
      "Chronic and specialty therapies",
      "Institutional and public-sector supply",
    ],
    fullDescription:
      "Medova provides access to a broad range of pharmaceutical products, ensuring consistent availability of essential and specialty medicines across regulated markets. With trusted manufacturing partners, regulatory-aligned sourcing, secure supply chains, and support for national procurement programs, we ensure healthcare systems have reliable access to the medicines they need.",
    idealFor:
      "Government healthcare systems, hospitals, NGOs, large pharmacy networks",
  },
  {
    icon: Activity,
    image: med,
    title: "Medical Equipment & Devices",
    description:
      "Modern, reliable medical equipment that enhances diagnostic accuracy, treatment efficiency, and patient outcomes.",
    details: [
      "Diagnostic and imaging equipment",
      "Patient monitoring systems",
      "Point-of-care and surgical devices",
      "Facility and infrastructure solutions",
    ],
    fullDescription:
      "Medova delivers modern, reliable medical equipment that enhances diagnostic accuracy, treatment efficiency, and patient outcomes. Our equipment is matched to clinical and operational needs, with scalable solutions for small clinics to tertiary hospitals. We provide vendor-neutral selection focused on performance and lifecycle value, along with installation coordination and technical support.",
    idealFor:
      "Hospitals, clinics, diagnostic centers, government healthcare projects",
  },
  {
    icon: Monitor,
    image: end,
    title: "End-to-End Healthcare Software Solutions",
    description:
      "Integrated digital platforms that modernize healthcare operations and enhance data-driven decision-making.",
    details: [
      "Hospital Management Systems (HMS)",
      "Electronic Health Records (EHR)",
      "Supply chain and inventory intelligence",
      "Telemedicine platforms and analytics dashboards",
    ],
    fullDescription:
      "Medova provides integrated digital platforms that modernize healthcare operations, improve care delivery, and enhance data-driven decision-making. Our solutions offer seamless integration across departments, improved operational efficiency and visibility, secure and compliant data architecture, and scalable digital infrastructure for growing systems.",
    idealFor:
      "Hospitals, healthcare networks, governments, private healthcare operators",
  },
  {
    icon: Layers,
    image: int,
    title: "Integrated Healthcare Solutions & Turnkey Projects",
    description:
      "Complete healthcare solutions—not isolated products. We design, supply, integrate, and support full healthcare ecosystems.",
    details: [
      "Hospital and clinic setup projects",
      "Government healthcare modernization programs",
      "Emergency and disaster-response deployments",
      "Supply chain consolidation initiatives",
    ],
    fullDescription:
      "Medova specializes in delivering complete healthcare solutions, not isolated products. We design, supply, integrate, and support full healthcare ecosystems. With a single point of accountability, reduced operational complexity, faster implementation timelines, and a long-term partnership model, we ensure your healthcare projects succeed from start to finish.",
    idealFor:
      "Ministries of health, NGOs, large healthcare operators, public-private partnerships",
  },
  {
    icon: Globe,
    image: global,
    title: "Global Supply Chain & Logistics Management",
    description:
      "Precise and transparent management of healthcare products from manufacturing to point of care.",
    details: [
      "Global sourcing and vendor coordination",
      "Regulatory documentation support",
      "Warehousing and distribution strategy",
      "Inventory forecasting and optimization",
    ],
    fullDescription:
      "Medova manages the movement of healthcare products from manufacturing to point of care with precision and transparency. Our capabilities include global sourcing and vendor coordination, regulatory documentation support, warehousing and distribution strategy, cross-border logistics planning, and inventory forecasting and optimization—ensuring supply continuity, cost control, reduced risk and delays, and full traceability.",
    idealFor: "Healthcare organizations with global supply chain needs",
  },
  {
    icon: ShieldCheck,
    image: reg,
    title: "Regulatory, Quality & Compliance Support",
    description:
      "Expert support in navigating complex regulatory environments for healthcare organizations.",
    details: [
      "Product compliance alignment",
      "Market-specific regulatory guidance",
      "Quality assurance and documentation",
      "Support for public tenders and approvals",
    ],
    fullDescription:
      "Medova supports healthcare organizations in navigating complex regulatory environments. Our capabilities include product compliance alignment, market-specific regulatory guidance, quality assurance and documentation, and support for public tenders and approvals. We help ensure faster market entry, reduced compliance risk, and confidence for institutional buyers.",
    idealFor:
      "Healthcare organizations seeking regulatory compliance and market entry support",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image Layer - Adjust path as needed */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesbg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to ensure your primary-foreground text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/75" />
        </div>

        {/* Your Original Content Structure */}
        <div className="container relative z-10 mx-auto container-padding text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Our Services
            </span>
          </div>
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up stagger-1 max-w-4xl mx-auto">
            One Platform. Complete{" "}
            <span className="text-accent">Healthcare Solutions.</span>
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-up stagger-2 leading-relaxed">
            Medova delivers end-to-end healthcare services designed to support
            hospitals, clinics, governments, NGOs, and private healthcare
            providers across the entire medical value chain. Our services
            integrate products, technology, logistics, and intelligence into a
            unified ecosystem.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                    <service.icon className="w-4 h-4" />
                    Service
                  </div>
                  <h2 className="heading-md text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="text-sm font-medium text-primary">
                      Ideal for:
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {service.idealFor}
                    </span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="relative card-elevated overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title || "Service Image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-foreground mb-6">
              Ready to Get <span className="text-primary">Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us today to discuss how Medova can support your healthcare
              organization's unique needs.
            </p>
            <Button
              asChild
              className="btn-primary rounded-xl px-8 py-6 text-base"
            >
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
