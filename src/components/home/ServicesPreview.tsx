import { Link } from 'react-router-dom';
import { ArrowRight, Package, Pill, Activity, Monitor, Layers, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
    {
        icon: Package,
        title: 'Medical Disposables',
        description: 'High-quality consumables for clinical operations',
        color: 'bg-blue-500/10 text-blue-600',
    },
    {
        icon: Pill,
        title: 'Pharmaceuticals',
        description: 'Essential and specialty medicine sourcing',
        color: 'bg-green-500/10 text-green-600',
    },
    {
        icon: Activity,
        title: 'Medical Equipment',
        description: 'Diagnostic and treatment devices',
        color: 'bg-purple-500/10 text-purple-600',
    },
    {
        icon: Monitor,
        title: 'Healthcare Software',
        description: 'HMS, EHR, and telemedicine platforms',
        color: 'bg-orange-500/10 text-orange-600',
    },
    {
        icon: Layers,
        title: 'Turnkey Projects',
        description: 'Complete healthcare ecosystem solutions',
        color: 'bg-pink-500/10 text-pink-600',
    },
    {
        icon: Globe,
        title: 'Supply Chain',
        description: 'Global logistics and distribution',
        color: 'bg-cyan-500/10 text-cyan-600',
    },
];

export function ServicesPreview() {
    return (
        <section className="section-padding">
            <div className="container mx-auto container-padding">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Our Services
                    </div>
                    <h2 className="heading-lg text-foreground mb-6">
                        Complete Healthcare <span className="text-primary">Solutions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From medical supplies to digital platforms, we provide integrated solutions
                        designed for modern healthcare ecosystems.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="card-elevated p-6 lg:p-8 group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild className="btn-primary rounded-xl px-8 py-6 text-base">
                        <Link to="/services">
                            View All Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
