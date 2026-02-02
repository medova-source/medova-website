import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyMedova } from "@/components/home/WhyMedova";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <Layout>
      <HeroSection />
      <PartnerLogos />
      <AboutPreview />
      <StatsSection />
      <WhyMedova />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
