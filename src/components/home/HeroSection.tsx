import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Floating decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float">
          <Heart className="w-10 h-10 text-accent" />
        </div>
        <div className="absolute top-40 right-[5%] w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center animate-float-delayed">
          <Sparkles className="w-8 h-8 text-primary-foreground/60" />
        </div>
        <div
          className="absolute bottom-32 right-[20%] w-24 h-24 rounded-2xl bg-accent/15 backdrop-blur-sm border border-accent/20 flex items-center justify-center animate-float"
          style={{ animationDelay: "-2s" }}
        >
          <Activity className="w-12 h-12 text-accent/80" />
        </div>
        <div className="absolute bottom-20 left-[10%] w-14 h-14 rounded-full bg-primary-foreground/10 backdrop-blur-sm animate-float-delayed" />
        <div className="absolute top-32 left-[5%] w-10 h-10 rounded-full bg-accent/20 animate-float" />
      </div> */}

      <div className="container mx-auto container-padding relative">
        <div className="py-24 lg:py-40 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted Healthcare Partner
            </span>
          </div>

          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up stagger-1">
            A new force in{" "}
            <span className="text-accent">Global Healthcare</span> Solutions
          </h1>

          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl animate-fade-up stagger-2 leading-relaxed">
            Seamlessly integrating medical disposables, pharmaceuticals,
            advanced equipment, and comprehensive healthcare software into one
            unified ecosystem for modern healthcare systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
            <Button
              asChild
              size="lg"
              className="btn-accent rounded-xl px-8 py-6 text-base"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
