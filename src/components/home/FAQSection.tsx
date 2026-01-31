import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What services does Medova provide?",
        answer: "Medova provides comprehensive healthcare solutions including medical disposables and consumables, pharmaceutical sourcing, medical equipment, healthcare software (HMS, EHR, telemedicine), integrated turnkey projects, global supply chain management, and regulatory compliance support.",
    },
    {
        question: "Which regions does Medova operate in?",
        answer: "Medova operates globally with presence in over 50 countries across Africa, Asia, Middle East, Europe, and the Americas. We have strategic partnerships and local expertise to serve healthcare organizations worldwide.",
    },
    {
        question: "How does Medova ensure product quality?",
        answer: "All our products meet international quality standards including FDA, CE, and ISO certifications. We partner only with reputable manufacturers and maintain rigorous quality assurance processes throughout our supply chain.",
    },
    {
        question: "Can Medova handle large-scale government contracts?",
        answer: "Yes, Medova specializes in large-scale healthcare projects including government tenders, ministry of health programs, and public-private partnerships. We have experience delivering comprehensive solutions for national healthcare initiatives.",
    },
    {
        question: "What makes Medova different from other healthcare suppliers?",
        answer: "Medova offers a unified healthcare ecosystem—combining physical products (supplies, pharmaceuticals, equipment) with digital solutions (software platforms)—all under one trusted partner. This integrated approach reduces complexity and ensures seamless operations.",
    },
    {
        question: "How can I get started with Medova?",
        answer: "Simply visit our Contact page or reach out via email at info@medova.com. Our team will schedule a consultation to understand your specific healthcare needs and propose tailored solutions.",
    },
];

function FAQItem({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-border/50 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
            >
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
            >
                <p className="text-muted-foreground leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding">
            <div className="container mx-auto container-padding">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left side - Heading */}
                    <div className="lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                            <HelpCircle className="w-4 h-4" />
                            FAQ
                        </div>
                        <h2 className="heading-lg text-foreground mb-6">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Find answers to common questions about our services, capabilities, and how we can support your healthcare organization.
                        </p>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                            <p className="text-foreground font-medium mb-2">Still have questions?</p>
                            <p className="text-muted-foreground text-sm">
                                Our team is here to help. Reach out at{' '}
                                <a href="mailto:info@medova.com" className="text-primary hover:underline">
                                    info@medova.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right side - FAQ items */}
                    <div className="card-elevated p-6 lg:p-8">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
