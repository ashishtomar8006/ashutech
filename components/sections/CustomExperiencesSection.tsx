"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function CustomExperiencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
                <p className="text-purple-100 mb-6">
                  Experience world-class development with our team of 100+ expert engineers, each with 10+ years of experience in cutting-edge technologies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">10+</div>
                    <div className="text-sm text-purple-100">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">100+</div>
                    <div className="text-sm text-purple-100">Expert Engineers</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom Digital{" "}
                <span className="text-purple-600">Experiences</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We craft high-converting websites and apps that align with your business goals – at 40% lower costs than local agencies.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}