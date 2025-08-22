"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce & Retail",
      description: "Built a custom Shopify store for a boutique fashion brand, increasing online sales by 220% in 6 months with SEO and conversion-focused design.",
      color: "from-purple-500 to-pink-500",
      icon: "🛍️"
    },
    {
      title: "Hotels & Restaurants",
      description: "Developed a reservation + loyalty app for a hotel chain, boosting direct bookings by 40% and reducing third-party commission costs.",
      color: "from-blue-500 to-teal-500",
      icon: "🏨"
    },
    {
      title: "Personal Shops (Beauty/Services)",
      description: "Launched a booking website for a local salon with automated scheduling and SMS reminders, cutting no-shows by 60%.",
      color: "from-green-500 to-emerald-500",
      icon: "💅"
    },
    {
      title: "Real Estate",
      description: "Created a virtual tour platform for realtors, helping a brokerage close 15% more deals in a competitive market.",
      color: "from-orange-500 to-red-500",
      icon: "🏡"
    }
  ];

  return (
    <section className="py-16 bg-slate-900" ref={ref}>
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
              Our Selected Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Tailored Solutions for Growing Businesses
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${project.color} text-white text-2xl mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${project.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}