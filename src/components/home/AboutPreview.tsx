import logoWhite from '@/assets/white.png';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import img1 from '@/assets/img1.png'

const highlights = [
  'Unified healthcare ecosystem',
  'Global regulatory compliance',
  'End-to-end supply chain solutions',
  'Trusted by government entities',
];

export function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
            <div className="relative">
              <img src={img1} alt="" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Medova
            </div>

            <h2 className="heading-lg text-foreground mb-6">
              Simplifying Healthcare{' '}
              <span className="text-primary">Resource Delivery</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Medova is an international healthcare sourcing and supply company that works with
              large institutional clients and government entities to secure medicines and medical
              disposables across multiple markets.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We collaborate with ministries of health, public health systems, hospitals, and major
              distributors in different countries to support their pharmaceutical and medical supply
              needs through compliant, reliable, and well-structured procurement.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="btn-primary rounded-xl px-8">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
