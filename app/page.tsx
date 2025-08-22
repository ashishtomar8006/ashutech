"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyAffordableSection from "@/components/sections/WhyAffordableSection";
import CustomExperiencesSection from "@/components/sections/CustomExperiencesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SlidingContentSection from "@/components/sections/SlidingContentSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/sections/header";
import PricingSection from "@/components/sections/pricing-section";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-2xl font-bold"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header/>
      <HeroSection />
      <ServicesSection />
      {/* <BenefitsSection /> */}
      <WelcomeSection />
      <SlidingContentSection />
      <TechnologiesSection />
      <ProjectsSection />
      <WhyAffordableSection />
      <PricingSection />
      {/* <CustomExperiencesSection /> */}
      {/* <ProcessSection /> */}
      <TestimonialsSection />
      {/* <TeamSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
      <FooterSection />
    </motion.div>
  );
}