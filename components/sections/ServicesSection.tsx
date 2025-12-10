"use client"

import { motion } from "framer-motion"
import { useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award, Users, Zap, Shield, Rocket, CheckCircle } from "lucide-react"

export default function ServicesSection({setIsQuoteModalOpen}: {setIsQuoteModalOpen: (value: boolean) => void}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      title: "Premium Quality",
      description: "Enterprise-level development with cutting-edge technologies and best practices",
      icon: Award,
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-indigo-600",
      features: ["Clean Code", "Best Practices", "Quality Assurance"],
    },
    {
      title: "Real-Time Progress",
      description: "Live project tracking with transparent updates and milestone notifications",
      icon: Zap,
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gradient: "from-cyan-500 to-blue-600",
      features: ["Live Updates", "Progress Tracking", "Milestone Reports"],
    },
    {
      title: "Client Satisfaction",
      description: "98% client satisfaction rate with dedicated support and personalized service",
      icon: Users,
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gradient: "from-emerald-500 to-teal-600",
      features: ["24/7 Support", "Personal Manager", "Satisfaction Guarantee"],
    },
    {
      title: "Lightning Fast",
      description: "Rapid development and deployment with optimized performance and speed",
      icon: Rocket,
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-red-600",
      features: ["Fast Delivery", "Optimized Performance", "Quick Deployment"],
    },
  ]

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Moving Background Text */}
      <motion.div
        style={{ x }}
        className="absolute left-0 top-5 text-[5rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none"
      >
        EXCELLENCE • INNOVATION • QUALITY • SPEED • EXCELLENCE • INNOVATION •
      </motion.div>

      <div className="container mx-auto pt-12 px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-purple-300 font-medium mb-6 border border-purple-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5" />
              WHY CHOOSE US
            </motion.div>

            <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              YOUR TIME IS{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                PRECIOUS
              </span>
            </h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light">
              Experience the difference with our premium web solutions
            </p>

            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We handle the complexity of modern web development while you focus on growing your business. From concept
              to deployment, we deliver exceptional results that exceed expectations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      // style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Projects Completed", icon: Rocket },
              { number: "98%", label: "Client Satisfaction", icon: Users },
              { number: "24/7", label: "Support Available", icon: Shield },
              { number: "50%", label: "Cost Savings", icon: Award },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div className="inline-flex flex-col sm:flex-row items-center gap-6" whileHover={{ scale: 1.02 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0"
                onClick={() => setIsQuoteModalOpen(true)}
                >
                Start Your Project Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-xl font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              >
                View Our Portfolio
              </Button>
            </motion.div>

            <p className="text-gray-400 mt-6 text-lg">
              Join 500+ satisfied clients who transformed their business with us
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
