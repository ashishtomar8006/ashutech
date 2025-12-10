"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Header from "@/components/sections/header"
import FooterSection from "@/components/sections/FooterSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Code, Database, Smartphone, Zap, Headphones, Search, Palette } from "lucide-react"

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Scalable Architecture"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Performance", "Cross-Platform", "User Friendly", "Push Notifications"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable backend systems with secure databases and APIs",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Real-time Systems"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your online visibility and rank higher in search results",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that engage and convert",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 support and maintenance for your digital products",
      features: ["Bug Fixes", "Updates", "Performance Monitoring", "Security"],
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-purple-300 font-medium mb-6 border border-purple-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-5 h-5" />
              OUR SERVICES
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              From concept to deployment, we provide end-to-end digital services tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:shadow-2xl hover:shadow-purple-200/20 transition-all duration-300">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let's discuss how our services can help you achieve your goals
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full shadow-2xl"
              >
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
