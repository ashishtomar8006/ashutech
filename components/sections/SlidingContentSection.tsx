"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from "lucide-react";

export default function SlidingContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scalability",
      description: "Built to scale worldwide"
    }
  ];

  return (
    <section className="pb-20 bg-slate-900 overflow-hidden relative" ref={ref}>
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sliding Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Advanced Technology"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-purple-600 text-white p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Sliding Content */}
          <motion.div
            style={{ y: contentY }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full text-purple-400 font-medium mb-6 border border-purple-600/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                INNOVATION DRIVEN
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We leverage cutting-edge technologies and innovative approaches to build solutions that don't just meet today's needs, but anticipate tomorrow's challenges.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-600/50 transition-all duration-300"
                >
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Explore Our Solutions
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}