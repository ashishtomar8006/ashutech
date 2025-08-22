"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [websiteCount, setWebsiteCount] = useState(0);
  const [retentionRate, setRetentionRate] = useState(0);
  const [ecommerceCount, setEcommerceCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const websiteTimer = setInterval(() => {
        setWebsiteCount(prev => (prev < 200 ? prev + 4 : 200));
      }, 50);

      const retentionTimer = setInterval(() => {
        setRetentionRate(prev => (prev < 95 ? prev + 2 : 95));
      }, 50);

      const ecommerceTimer = setInterval(() => {
        setEcommerceCount(prev => (prev < 99 ? prev + 2 : 99));
      }, 50);

      return () => {
        clearInterval(websiteTimer);
        clearInterval(retentionTimer);
        clearInterval(ecommerceTimer);
      };
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Build Your Digital Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-white/80 mb-8"
            >
              Expert web & app development solutions to power your business growth
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-6xl font-bold text-white mb-4">
                {websiteCount}
                <span className="text-purple-400">+</span>
              </div>
              <div className="text-white/80 text-lg">Websites & App Launched</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-6xl font-bold text-white mb-4">
                {retentionRate}
                <span className="text-purple-400">%</span>
              </div>
              <div className="text-white/80 text-lg">Client Retention Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-6xl font-bold text-white mb-4">
                {ecommerceCount}
                <span className="text-purple-400">+</span>
              </div>
              <div className="text-white/80 text-lg">E-commerce Solutions</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}