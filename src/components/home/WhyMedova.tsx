import { Users, Globe, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "A Single Healthcare Partner",
    description:
      "Rather than managing multiple vendors, Medova consolidates your healthcare supply chain into one reliable partnership—simplifying procurement and ensuring consistency.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Execution",
    description:
      "We serve communities across continents through strategic partnerships and culturally informed service models, matching global capabilities with local healthcare understanding.",
  },
  {
    icon: Lightbulb,
    title: "Solutions, Not Just Products",
    description:
      "We bring together physical products and digital capabilities to form a cohesive healthcare ecosystem—from supplies to software, all designed to work together.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Healthcare",
    description:
      "Every solution we provide is designed with patient outcomes in mind. We measure success not by products shipped, but by healthcare systems strengthened.",
  },
];

export function WhyMedova() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose Medova
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In an era where the demands on healthcare systems are increasingly
            complex, Medova serves as an agile, dependable partner with a wide
            spectrum of offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-elevated p-8 lg:p-10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <value.icon className="w-7 h-7" />
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
