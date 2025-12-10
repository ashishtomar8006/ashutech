"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: "Bakersfield, CA",
      address: "4900 California Avenue, Bakersfield, CA 93309",
      phone: "+1 913 578 8379",
      timezone: "PST"
    },
    {
      city: "London, UK",
      address: "70 White Lion Street, London N1 9PP",
      phone: "+44 20 7946 0958",
      timezone: "GMT"
    },
    {
      city: "Noida, India",
      address: "Advant Navis Business Park, Noida, India",
      phone: "+91 120 456 7890",
      timezone: "IST"
    },
    {
      city: "Adelaide, Australia",
      address: "25 Grenfell Street, Adelaide, SA 5000",
      phone: "+61 8 8123 4567",
      timezone: "ACST"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Start Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our expert team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/60 focus:border-purple-400 focus:outline-none resize-none"
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900  hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold text-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
               
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+91 8006472513</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">ashishtomar8006@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
  <p className="text-white font-medium">Business Hours</p>
  <p className="text-white/70">24/7 · Monday to Sunday</p>
</div>

                </div>
              </div>
            </div>

            <div className="">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Global Offices
              </h3>
              <div className="space-y-4">
                {/* {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="border-l-2 border-purple-400 pl-4"
                  >
                    <h4 className="text-white font-medium">{office.city}</h4>
                    <p className="text-white/60 text-sm">{office.address}</p>
                    <p className="text-white/60 text-sm">{office.phone} • {office.timezone}</p>
                  </motion.div>
                ))} */}

                <div className="border-l-2 border-purple-400 pl-4 flex gap-4">
                    <h4 className="text-white font-medium">Noida, UP, India</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}