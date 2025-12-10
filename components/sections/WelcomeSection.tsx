"use client"

import { motion } from "framer-motion"
import { useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code, TrendingUp, ShoppingCart, ArrowRight, Sparkles, Target } from "lucide-react"

export default function WelcomeSection({setIsQuoteModalOpen}: {setIsQuoteModalOpen: (value: boolean) => void}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const services = [
    {
      number: "01",
      title: "Custom Digital Solutions",
      subtitle: "Web & App Development",
      description:
        "Transform your vision into powerful digital experiences. We craft bespoke websites and applications that drive engagement, conversions, and business growth with cutting-edge technology.",
      icon: Code,
      color: "from-blue-400 via-purple-500 to-indigo-600",
      accent: "text-blue-400",
      features: ["Custom Development", "Responsive Design", "Performance Optimization"],
    },
    {
      number: "02",
      title: "Strategic Growth Marketing",
      subtitle: "SEO & Lead Generation",
      description:
        "Amplify your digital presence with data-driven strategies. Our comprehensive approach combines advanced SEO techniques with targeted campaigns to generate qualified leads and maximize ROI.",
      icon: TrendingUp,
      color: "from-emerald-400 via-green-500 to-teal-600",
      accent: "text-emerald-400",
      features: ["SEO Optimization", "Lead Generation", "Analytics & Reporting"],
    },
    {
      number: "03",
      title: "eCommerce Excellence",
      subtitle: "Sales & Reputation Management",
      description:
        "Build a thriving online business with our comprehensive eCommerce solutions. From conversion-optimized stores to reputation management, we ensure sustainable growth and customer trust.",
      icon: ShoppingCart,
      color: "from-orange-400 via-red-500 to-pink-600",
      accent: "text-orange-400",
      features: ["eCommerce Development", "Reputation Management", "Sales Optimization"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative pt-20 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            // backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              OUR EXPERTISE
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to execution, we deliver end-to-end digital experiences that drive measurable results and
              accelerate your business growth.
            </p>
          </motion.div>

          {/* Services */}
          <div className="space-y-10">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.number}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-6"}`}>
                    <div className="space-y-6">
                      {/* Number and Icon */}
                      <div className="flex items-center gap-6">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="text-8xl font-bold text-transparent bg-gradient-to-br from-white/10 to-white/5 bg-clip-text select-none">
                            {service.number}
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </motion.div>

                        <div className="flex-1">
                          <div className={`h-px bg-gradient-to-r ${service.color} opacity-50`} />
                        </div>
                      </div>

                      {/* Title and Subtitle */}
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                          {service.title}
                        </h3>
                        <h4 className={`text-xl font-semibold ${service.accent} mb-6`}>{service.subtitle}</h4>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{service.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + featureIndex * 0.1 }}
                            className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10"
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="pt-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div
                          className={`inline-flex items-center gap-2 ${service.accent} font-semibold text-lg cursor-pointer group`}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:col-start-8" : "lg:col-start-1"}`}>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Main Circle */}
                      <div
                        className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-xl`}
                      />

                      {/* Overlay Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-64 h-64 rounded-full bg-gradient-to-br ${service.color} opacity-30 animate-pulse`}
                        />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-slate-800/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                          <IconComponent className={`w-16 h-16 ${service.accent}`} />
                        </div>
                      </div>

                      {/* Floating Elements */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${service.color}`}
                          style={{
                            top: `${20 + i * 30}%`,
                            left: `${10 + i * 25}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-32">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our comprehensive solutions can accelerate your business growth and deliver
                exceptional results.
              </p>
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <Target className="w-6 h-6" />
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
