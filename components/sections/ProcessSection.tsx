"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, TrendingUp } from "lucide-react";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processes = [
    {
      title: "Strategy & Research",
      description: "Our team of 100+ expert engineers (10+ years experience) transforms market insights into actionable tech strategies.",
      features: ["Market-fit validation", "Competitor benchmarking"],
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Interaction Design",
      description: "Our seasoned engineers craft pixel-perfect UX that converts, backed by a decade of behavioral research.",
      features: ["User flow optimization", "Conversion-focused UI"],
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Visibility",
      description: "Leverage our 10,000+ hours of collective expertise to make your brand shine across all digital touchpoints.",
      features: ["SEO-optimized platforms", "Performance analytics"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Captivating designs within budget-friendly packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${process.color} text-white mb-6`}>
                  {process.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {process.description}
                </p>
                
                <ul className="space-y-3">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Website Design Innovation can transform even the most unconventional ideas into sophisticated designs, remarkable experiences, and memorable brands.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}