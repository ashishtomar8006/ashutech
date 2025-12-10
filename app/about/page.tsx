"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Header from "@/components/sections/header"
import FooterSection from "@/components/sections/FooterSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Lightbulb, Award } from "lucide-react"
import GetQuoteModal from "@/components/sections/get-quote-modal"
import { useState } from "react"

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We are committed to delivering exceptional results that exceed expectations",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly exploring new technologies and methodologies to stay ahead",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We prioritize your goals and vision",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Rigorous testing and standards ensure every project meets our high bar",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ashu Tech
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Building digital solutions that transform businesses and create lasting impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Founded in 2020, Ashu Tech was born from a simple idea: make world-class web development and digital
                marketing services accessible to businesses of all sizes. We believed that quality shouldn't come with a
                premium price tag.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a full-fledged digital agency.
                Today, we have helped over 500 businesses transform their digital presence and achieve their goals.
              </p>
              <p>
                Our commitment to excellence, innovation, and client success has made us one of the most trusted digital
                partners in the industry. We don't just build websites and apps – we build relationships and
                partnerships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-lg text-slate-600">
              These core values guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "300+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "5+", label: "Years of Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's build something amazing together
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Join hundreds of businesses that have transformed with our expertise
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <FooterSection />

    </div>
  )
}
