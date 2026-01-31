import { Shield, Award, Building2, FileCheck } from 'lucide-react';

const credentials = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Fully compliant with international healthcare regulations and standards',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO certified with rigorous quality control processes',
  },
  {
    icon: Building2,
    title: 'Government Partners',
    description: 'Trusted by ministries of health and public health systems',
  },
  {
    icon: FileCheck,
    title: 'Documentation Excellence',
    description: 'Complete regulatory coordination and cross-border logistics',
  },
];

export function TrustSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Trust & Compliance
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            Built on <span className="text-primary">Trust & Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to quality, compliance, and reliability has made us a trusted partner 
            for healthcare organizations worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={credential.title}
              className="text-center p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <credential.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
