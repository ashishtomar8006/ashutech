"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Header from "@/components/sections/header"
import FooterSection from "@/components/sections/FooterSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("all")

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured Shopify store for a boutique fashion brand",
      category: "ecommerce",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "220% increase in sales within 6 months",
      technologies: ["React", "Next.js", "Shopify", "Tailwind CSS"],
    },
    {
      title: "Hotel Booking System",
      description: "Reservation and loyalty app for a hotel chain",
      category: "saas",
      image:
        "https://images.pexels.com/photos/1629317/pexels-photo-1629317.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "40% increase in direct bookings",
      technologies: ["Node.js", "React", "PostgreSQL", "Stripe"],
    },
    {
      title: "Salon Booking Platform",
      description: "Automated scheduling and SMS reminder system",
      category: "saas",
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "60% reduction in no-shows",
      technologies: ["React", "Firebase", "Twilio", "Stripe"],
    },
    {
      title: "Real Estate Virtual Tour",
      description: "3D virtual tour platform for real estate agents",
      category: "webapp",
      image:
        "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "15% more deals closed",
      technologies: ["Three.js", "React", "WebGL", "Node.js"],
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics and reporting dashboard",
      category: "saas",
      image:
        "https://images.pexels.com/photos/3873215/pexels-photo-3873215.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "Better insights for 500+ users",
      technologies: ["Next.js", "Recharts", "PostgreSQL", "Redis"],
    },
    {
      title: "Mobile App - Fitness",
      description: "Cross-platform fitness tracking application",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
      result: "50K+ active users",
      technologies: ["React Native", "Firebase", "Stripe", "AWS"],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "saas", label: "SaaS" },
    { id: "webapp", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Showcase of successful projects across various industries and platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>

                  {/* Result */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-700">{item.result}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for your next project?</h2>
            <p className="text-xl text-white/90 mb-10">Let's create something exceptional for your business</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full shadow-2xl"
              >
                Get in Touch
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
