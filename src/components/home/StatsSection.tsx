import { useEffect, useState, useRef } from 'react';
import { Package, Globe, Users, Layers } from 'lucide-react';

const stats = [
  {
    icon: Package,
    numericValue: 100,
    suffix: 'K+',
    label: 'Medical Kits Delivered',
    description: 'Comprehensive medical supply solutions delivered globally',
  },
  {
    icon: Globe,
    numericValue: 50,
    suffix: '+',
    label: 'Global Presence',
    description: 'Operating across continents with strategic partnerships',
  },
  {
    icon: Users,
    numericValue: 200,
    suffix: '+',
    label: 'Trusted Healthcare Partners',
    description: 'Collaborating with hospitals, ministries, and distributors',
  },
  {
    icon: Layers,
    numericValue: 4,
    suffix: '-in-1',
    label: 'Integrated Healthcare Solutions',
    description: 'Supplies, pharma, equipment, and software unified',
  },
];

// Custom hook for count-up animation
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      // Easing function for smooth animation (ease-out cubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      countRef.current = Math.floor(easedProgress * end);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, shouldStart]);

  return count;
}

// Animated stat component
function AnimatedStat({
  stat,
  index,
  isVisible
}: {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.numericValue, 2000, isVisible);

  return (
    <div
      className="card-elevated p-6 lg:p-8 text-center group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <stat.icon className="w-7 h-7" />
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
      <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
    </div>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="pt-16 md:pt-16 lg:pt-24 pb-8 md:pb-12 lg:pb-16 bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
