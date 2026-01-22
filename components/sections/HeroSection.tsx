"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe, Play, Star, Award, Users, Rocket } from "lucide-react"

export default function HeroSection() {
  const [currentCount, setCurrentCount] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const backgroundImages = [
    "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    // "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  ]

  const stats = [
    { number: 200, label: "Projects Completed", icon: Award },
    { number: 150, label: "Happy Clients", icon: Users },
    { number: 50, label: "Team Members", icon: Rocket },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCount((prev) => (prev < 200 ? prev + 5 : 200))
    }, 50)

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 6000)

    return () => {
      clearInterval(timer)
      clearInterval(slideTimer)
    }
  }, [backgroundImages.length])

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

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="home">
      {/* Background Image Slider with Full Opacity */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1.05 : 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ))}

        {/* Light Black Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
      </motion.div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/4 right-1/4 text-white/20" variants={floatingVariants} animate="animate">
          <Code size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-white/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Zap size={60} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-white/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Globe size={70} />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pb-10 pt-20 relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium mb-8 border border-white/20 shadow-lg"
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                  #1 WEB SOLUTIONS PROVIDER
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                We Create{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#5ae2f3] bg-clip-text text-transparent">
                  Stunning
                </span>
                <br />
                Digital Experiences
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
              >
                Transform your business with our premium web solutions.
                <span className="text-yellow-400 font-semibold"> Save 50% costs</span> while getting enterprise-level
                quality and performance.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border-0"
                  >
                    Start Your Project
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                  >
                    <Play className="mr-3 h-5 w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Stats */}
            {/* <div className="lg:col-span-5">
              <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <motion.div
                              className="text-4xl font-bold text-white mb-2"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 200 }}
                            >
                              {index === 0 ? `${currentCount}+` : `${stat.number}+`}
                            </motion.div>
                            <div className="text-white/80 text-lg font-medium">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#5ae2f3]"
                layoutId="activeSlide"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-[#5ae2f3] rounded-full mt-3"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
