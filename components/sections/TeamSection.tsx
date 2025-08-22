"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Full-Stack Developer",
      expertise: "React, Node.js, AWS",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "12+ years",
      projects: "150+"
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Design Director",
      expertise: "Design Systems, Figma, User Research",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "10+ years",
      projects: "200+"
    },
    {
      name: "Marcus Chen",
      role: "DevOps & Cloud Architect",
      expertise: "Kubernetes, Docker, CI/CD",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "11+ years",
      projects: "100+"
    },
    {
      name: "Sarah Williams",
      role: "Digital Marketing Strategist",
      expertise: "SEO, PPC, Analytics",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "8+ years",
      projects: "300+"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Expert{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            100+ seasoned professionals with 10+ years of experience each, ready to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <motion.div
                style={{ x: index % 2 === 0 ? x : useTransform(x, (value) => -value) }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Twitter className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Github className="w-4 h-4 text-gray-800" />
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.expertise}
                  </p>
                  
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{member.experience}</div>
                      <div className="text-gray-500">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{member.projects}</div>
                      <div className="text-gray-500">Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-purple-100 mb-6">
              We're always looking for talented individuals to join our mission of delivering exceptional digital solutions.
            </p>
            <motion.button
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}