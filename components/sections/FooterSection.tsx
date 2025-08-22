"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-gray-900 text-white py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="email address"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brief form</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                  <div className="text-gray-300">
                    <p>Noida, UP, India</p>
                    {/* <p>70 White Lion Street ,London N1 9PP</p>
                    <p>Advant Navis, Noida, India</p>
                    <p>25 Grenfell Street, Adelaide, SA, 5000</p> */}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div className="text-gray-300">
                    <p>+91 8006472513</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div className="text-gray-300">
                    <p>contact@aashutech.vercel.app</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2024 Ashu Tech. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}