import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-x-hidden py-10 sm:py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90">
          {/* BACKGROUND EFFECTS – DISABLED ON MOBILE */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 m-auto w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          </div>

          <div className="relative py-6 px-3 sm:p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* LEFT */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                  Ready to Transform Your Healthcare Operations?
                </h2>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-primary-foreground/80">
                  Partner with Medova and experience a unified healthcare
                  solution.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    className="w-full bg-[#117e7a] sm:w-auto rounded-xl px-6 py-4 text-sm sm:text-base"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl px-6 py-4 text-sm sm:text-base"
                  >
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 sm:p-6">
                  <div className="h-8 w-8 md:h-12 md:w-12 shrink-0 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Phone className="h-3 w-3 md:h-5 md:w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-primary-foreground/60">
                      Call us
                    </p>
                    <a className="block truncate text-sm md:text-base font-semibold text-primary-foreground">
                      +1 (678) 994-5719
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 sm:p-6">
                  <div className="h-8 w-8 md:h-12 md:w-12 shrink-0 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Mail className="h-3 w-3 md:h-5 md:w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-primary-foreground/60">Email</p>
                    <a className="block truncate text-sm md:text-base font-semibold text-primary-foreground">
                      Info@medovahealthcare.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
