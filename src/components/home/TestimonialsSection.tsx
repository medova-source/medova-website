import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "Medova transformed our hospital's supply chain. Their integrated approach saved us 30% on procurement costs while improving product quality and delivery times.",
        author: "Dr. Sarah Chen",
        role: "Chief Medical Officer",
        organization: "Metropolitan Health System",
        rating: 5,
    },
    {
        quote: "The healthcare software solutions from Medova seamlessly integrated with our existing systems. Our staff productivity increased significantly within the first month.",
        author: "James Rodriguez",
        role: "Director of Operations",
        organization: "Regional Medical Center",
        rating: 5,
    },
    {
        quote: "Working with Medova on our turnkey hospital project was exceptional. They delivered on time, within budget, and exceeded our quality expectations.",
        author: "Dr. Amara Okonkwo",
        role: "Ministry of Health Representative",
        organization: "Federal Healthcare Initiative",
        rating: 5,
    },
    {
        quote: "Their global logistics network ensured we never faced stockouts, even during the most challenging times. Medova is a true partner in healthcare.",
        author: "Michael Thompson",
        role: "Supply Chain Director",
        organization: "National Healthcare Network",
        rating: 5,
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1s' }} />
            </div>

            <div className="container mx-auto container-padding relative">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
                        Testimonials
                    </div>
                    <h2 className="heading-lg text-primary-foreground mb-6">
                        What Our Partners <span className="text-accent">Say</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Quote icon */}
                        <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />

                        {/* Testimonial content */}
                        <div className="card-elevated p-8 lg:p-12 bg-primary-foreground/5 backdrop-blur-sm border-primary-foreground/10">
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8 italic">
                                "{testimonials[currentIndex].quote}"
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-primary-foreground text-lg">
                                        {testimonials[currentIndex].author}
                                    </p>
                                    <p className="text-primary-foreground/70">
                                        {testimonials[currentIndex].role}
                                    </p>
                                    <p className="text-accent text-sm">
                                        {testimonials[currentIndex].organization}
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dots indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-accent w-8'
                                            : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
