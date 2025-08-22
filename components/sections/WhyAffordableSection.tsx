"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Award, Clock, Users, Sparkles, TrendingDown, Shield, Zap } from "lucide-react"

export default function WhyAffordableSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  const stats = [
    {
      icon: TrendingDown,
      number: "50%",
      label: "Cost Reduction",
      description: "Compared to traditional agencies",
      color: "from-emerald-400 to-green-500",
      accent: "text-emerald-400",
    },
    {
      icon: Award,
      number: "100%",
      label: "Premium Quality",
      description: "Enterprise-level standards",
      color: "from-blue-400 to-cyan-500",
      accent: "text-blue-400",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Global Support",
      description: "Round-the-clock assistance",
      color: "from-purple-400 to-pink-500",
      accent: "text-purple-400",
    },
    {
      icon: Users,
      number: "150+",
      label: "Expert Team",
      description: "Skilled professionals worldwide",
      color: "from-orange-400 to-red-500",
      accent: "text-orange-400",
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Strategic Global Partnership",
      description:
        "We leverage our international network of top-tier developers to deliver exceptional value without compromising quality.",
    },
    {
      icon: Zap,
      title: "Streamlined Operations",
      description:
        "Our optimized workflows and efficient processes eliminate unnecessary overhead costs while maintaining premium standards.",
    },
    {
      icon: Award,
      title: "Direct Client Relationship",
      description:
        "By working directly with you, we cut out middleman costs and pass the savings directly to our clients.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      },
    },
  }

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ rotate }} className="absolute top-1/4 right-1/4 text-white/5">
          <DollarSign size={120} />
        </motion.div>
        <motion.div
          style={{ rotate: rotate }}
          className="absolute bottom-1/3 left-1/4 text-white/5"
          transition={{ delay: 1 }}
        >
          <Award size={100} />
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full text-emerald-300 font-medium mb-8 border border-emerald-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              VALUE PROPOSITION
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Why We're{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Affordable
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium quality doesn't have to come with premium prices. Discover how our strategic approach delivers
              enterprise-level solutions at a fraction of traditional costs.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Strategic Global Operations
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Our innovative approach combines the best of global talent with streamlined operations, allowing us
                    to deliver premium websites at <span className="text-emerald-400 font-semibold">50% below</span>{" "}
                    traditional agency rates while maintaining identical quality standards.
                  </p>
                </div>

                {/* Advantages List */}
                <div className="space-y-6">
                  {advantages.map((advantage, index) => {
                    const IconComponent = advantage.icon
                    return (
                      <motion.div
                        key={advantage.title}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* CTA */}
                <motion.div className="pt-4" whileHover={{ scale: 1.02 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 border-0"
                  >
                    Get Your Quote Today
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 text-center h-full">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Number */}
                        <motion.div
                          className={`text-4xl font-bold ${stat.accent} mb-3`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                        >
                          {stat.number}
                        </motion.div>

                        {/* Label */}
                        <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>

                        {/* Description */}
                        <div className="text-gray-400 text-sm">{stat.description}</div>

                        {/* Hover Glow */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Premium Quality at Affordable Prices?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who've discovered that exceptional web development doesn't have to
                break the bank. Let's discuss your project today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0"
                >
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
