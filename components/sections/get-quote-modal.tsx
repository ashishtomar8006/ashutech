"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, CheckCircle } from "lucide-react"

interface GetQuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleClose = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 px-6 py-8 md:px-8">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {isSubmitted ? "Request Received!" : "Get Your Free Quote"}
                </h2>
                <p className="text-white/90 mt-2">
                  {isSubmitted
                    ? "We'll get back to you shortly with a personalized quote"
                    : "Tell us about your project and we'll provide a custom quote"}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center mb-4"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
                    <p className="text-slate-600">
                      We've received your request and will contact you soon at{" "}
                      <span className="font-medium">{formData.email}</span>
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Basic Info */}
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="bg-slate-50 border-slate-300"
                              required
                            />
                          </div>

                          <div>
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
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 XXXXXXXXXX"
                              className="bg-slate-50 border-slate-300"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company"
                              className="bg-slate-50 border-slate-300"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Project Details */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-purple-500"
                              required
                            >
                              <option value="">Select project type</option>
                              <option value="website">Website</option>
                              <option value="ecommerce">E-Commerce Store</option>
                              <option value="mobile-app">Mobile App</option>
                              <option value="saas">SaaS Platform</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-purple-500"
                              required
                            >
                              <option value="">Select budget range</option>
                              <option value="under-10k">Under $10,000</option>
                              <option value="10k-25k">$10,000 - $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-plus">$50,000+</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-purple-500"
                              required
                            >
                              <option value="">Select timeline</option>
                              <option value="urgent">Urgent (ASAP)</option>
                              <option value="1-month">1 Month</option>
                              <option value="2-3-months">2-3 Months</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Project Description</label>
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Describe your project requirements..."
                              rows={4}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 resize-none"
                              required
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="flex gap-2">
                      <div
                        className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-purple-500" : "bg-slate-200"}`}
                      />
                      <div
                        className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-purple-500" : "bg-slate-200"}`}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      {step > 1 && (
                        <Button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-slate-200 text-slate-900 hover:bg-slate-300"
                        >
                          Back
                        </Button>
                      )}

                      {step === 1 ? (
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white"
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white"
                        >
                          Get Quote
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
