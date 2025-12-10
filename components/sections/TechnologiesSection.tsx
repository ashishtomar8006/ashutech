"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Cloud, Layers, Zap, Star, ArrowRight, Sparkles, Cpu, Globe } from "lucide-react"

export default function TechnologiesSection({setIsQuoteModalOpen}: {setIsQuoteModalOpen: (value: boolean) => void}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = {
    frontend: {
      title: "Frontend Mastery",
      icon: Code2,
      color: "from-blue-400 via-purple-500 to-indigo-600",
      description: "Creating stunning user experiences",
      techs: [
        { name: "React", icon: "⚛️", description: "Component-based UI library", specialty: "SPA Development" },
        { name: "Next.js", icon: "▲", description: "Full-stack React framework", specialty: "SSR & SSG" },
        { name: "Vue.js", icon: "💚", description: "Progressive JavaScript framework", specialty: "Reactive UIs" },
        { name: "TypeScript", icon: "📘", description: "Typed JavaScript superset", specialty: "Type Safety" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework", specialty: "Rapid Styling" },
        {
          name: "Framer Motion",
          icon: "🎭",
          description: "Animation library for React",
          specialty: "Smooth Animations",
        },
      ],
    },
    backend: {
      title: "Backend Excellence",
      icon: Database,
      color: "from-emerald-400 via-green-500 to-teal-600",
      description: "Powering robust server solutions",
      techs: [
        { name: "Node.js", icon: "🟢", description: "JavaScript runtime environment", specialty: "Server-side JS" },
        { name: "Python", icon: "🐍", description: "Versatile programming language", specialty: "AI & Web Apps" },
        { name: "GraphQL", icon: "🔗", description: "Query language for APIs", specialty: "Flexible APIs" },
        { name: "REST APIs", icon: "🌐", description: "Web service architecture", specialty: "HTTP Services" },
        { name: "Express.js", icon: "🚀", description: "Web framework for Node.js", specialty: "Web Servers" },
        { name: "FastAPI", icon: "⚡", description: "Modern Python web framework", specialty: "High Performance" },
      ],
    },
    database: {
      title: "Data Solutions",
      icon: Layers,
      color: "from-orange-400 via-red-500 to-pink-600",
      description: "Managing and scaling data efficiently",
      techs: [
        { name: "MongoDB", icon: "🍃", description: "NoSQL document database", specialty: "Flexible Schema" },
        { name: "PostgreSQL", icon: "🐘", description: "Advanced relational database", specialty: "ACID Compliance" },
        { name: "Redis", icon: "🔴", description: "In-memory data structure store", specialty: "Caching & Sessions" },
        { name: "Prisma", icon: "💎", description: "Next-generation ORM", specialty: "Type-safe DB Access" },
        { name: "Supabase", icon: "⚡", description: "Open source Firebase alternative", specialty: "Real-time Apps" },
        {
          name: "Firebase",
          icon: "🔥",
          description: "Google's app development platform",
          specialty: "Rapid Development",
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-cyan-400 via-blue-500 to-purple-600",
      description: "Deploying and scaling applications",
      techs: [
        { name: "AWS", icon: "☁️", description: "Amazon Web Services", specialty: "Cloud Infrastructure" },
        { name: "Vercel", icon: "▲", description: "Frontend deployment platform", specialty: "Edge Computing" },
        { name: "Docker", icon: "🐳", description: "Containerization platform", specialty: "App Packaging" },
        { name: "Kubernetes", icon: "⚙️", description: "Container orchestration", specialty: "Auto-scaling" },
        { name: "GitHub Actions", icon: "🔄", description: "CI/CD automation", specialty: "Workflow Automation" },
        { name: "Netlify", icon: "🌐", description: "Web development platform", specialty: "JAMstack Hosting" },
      ],
    },
  }

  type CategoryKey = keyof typeof categories // Define the type for keys

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend") // Use the defined type

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

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
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative pb-10 bg-slate-900 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
          { icon: "🐍", x: "80%", y: "30%", delay: 1 },
          { icon: "☁️", x: "20%", y: "70%", delay: 2 },
          { icon: "🍃", x: "70%", y: "80%", delay: 3 },
          { icon: "🔗", x: "90%", y: "60%", delay: 4 },
          { icon: "💎", x: "15%", y: "50%", delay: 5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl opacity-5"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center my-20">
            {/* <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              TECHNOLOGY ECOSYSTEM
            </motion.div> */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Tech{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Universe
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive technology stack - carefully curated tools and frameworks that power exceptional
              digital experiences.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key as CategoryKey)} // Cast key to CategoryKey
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.title}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">{categories[activeCategory].title}</h3>
              <p className="text-lg text-gray-300">{categories[activeCategory].description}</p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {categories[activeCategory].techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 h-full">
                    {/* Tech Icon */}
                    <div className="flex items-center justify-center w-16 h-16 text-4xl mb-4 mx-auto">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {tech.icon}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                        />
                      </motion.div>
                    </div>

                    {/* Tech Info */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                      {/* <p className="text-gray-400 text-sm mb-3">{tech.description}</p>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories[activeCategory].color} text-white`}
                      >
                        {tech.specialty}
                      </div> */}
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Cpu, number: "50+", label: "Technologies", color: "text-blue-400" },
              { icon: Globe, number: "500+", label: "Projects Built", color: "text-emerald-400" },
              { icon: Star, number: "5 Years", label: "Experience", color: "text-orange-400" },
              { icon: Zap, number: "24/7", label: "Innovation", color: "text-cyan-400" },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Leverage These Technologies?</h3>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can use our technology expertise to bring your vision to life with cutting-edge
                solutions.
              </p>
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <Code2 className="w-6 h-6" />
                Discuss Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
