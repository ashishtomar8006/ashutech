"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Header from "@/components/sections/header"
import FooterSection from "@/components/sections/FooterSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8006472513",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "ashishtomar8006@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Noida, UP, India",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "24/7 Support",
      color: "from-green-500 to-emerald-500",
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
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question or ready to start your project? We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.value}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-slate-50 border-slate-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-slate-50 border-slate-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="bg-slate-50 border-slate-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="bg-slate-50 border-slate-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    rows={5}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 resize-none"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white py-4 text-lg font-semibold rounded-full shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
