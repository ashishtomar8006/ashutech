"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import GetQuoteModal from "./get-quote-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    // { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 shadow-2xl shadow-black/20" : "py-4"
        }`}
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <motion.div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled ? "bg-slate-900/95 border-b border-white/10" : "bg-slate-900/80"
          }`}
          style={{ opacity: headerOpacity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
              <img src="/images/deloitte-name-logo.png" alt="" className="w-40 h-14" />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 font-medium relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
            initial={false}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => {
                    setIsQuoteModalOpen(true)
                    setIsOpen(false)
                  }}
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold"
                >
                  Get Quote
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
