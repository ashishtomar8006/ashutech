"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Sparkles,
  Globe,
  ShoppingCart,
  Code,
  Palette,
  TrendingUp,
  Search,
  Crown,
  Zap,
} from "lucide-react"

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const packageCategories = {
    website: {
      title: "Website Designs",
      icon: Globe,
      color: "from-blue-400 via-purple-500 to-indigo-600",
      packages: [
        {
          name: "Basic Website",
          price: "$225",
          originalPrice: "$450",
          popular: false,
          features: [
            "3 Page Website",
            "3 Banner Design",
            "1 jQuery Slider Banner",
            "FREE Google Friendly Sitemap",
            "Complete W3C Certified HTML",
            "48 to 72 hours TAT",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
          additionalFeatures: ["Mobile Responsive Will Be Additional $200*", "CMS Will Be Additional $250*"],
        },
        {
          name: "Startup Website",
          price: "$345",
          originalPrice: "$690",
          popular: false,
          features: [
            "5 Stock Photos",
            "5 Page Website",
            "3 Banner Design",
            "1 jQuery Slider Banner",
            "FREE Google Friendly Sitemap",
            "48 to 72 hours TAT",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
          additionalFeatures: ["Mobile Responsive will be Additional $200*", "CMS will be Additional $250*"],
        },
        {
          name: "Professional Website",
          price: "$645",
          originalPrice: "$1290",
          popular: true,
          features: [
            "10 Unique Pages Website",
            "CMS / Admin Panel Support",
            "8 Stock images",
            "5 Banner Designs",
            "1 jQuery Slider Banner",
            "FREE Google Friendly Sitemap",
            "48 to 72 hours TAT",
            "Complete Deployment",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
          additionalFeatures: ["Mobile Responsive will be Additional $200*"],
        },
        {
          name: "Elite Website",
          price: "$1245",
          originalPrice: "$2490",
          popular: false,
          features: [
            "Upto 15 Unique Pages Website",
            "Conceptual and Dynamic Website",
            "Mobile Responsive",
            "Online Reservation/Appointment Tool (Optional)",
            "Online Payment Integration (Optional)",
            "Custom Forms",
            "Lead Capturing Forms (Optional)",
            "Striking Hover Effects",
            "Newsletter Subscription (Optional)",
            "Newsfeed Integration",
            "Social Media Integration",
            "Search Engine Submission",
            "5 Stock Photos",
            "3 Unique Banner Design",
            "1 jQuery Slider Banner",
            "48 to 72 hours TAT",
            "Complete Deployment",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
        },
      ],
    },
    ecommerce: {
      title: "Ecommerce Packages",
      icon: ShoppingCart,
      color: "from-emerald-400 via-green-500 to-teal-600",
      packages: [
        {
          name: "Startup E-Commerce",
          price: "$549",
          originalPrice: "$1098",
          popular: false,
          features: [
            "Custom designed Homepage (1x concepts)",
            "5 Custom designed Inner pages",
            "Upto 25 to 50 Products",
            "Upto 7 Categories",
            "Content Management System",
            "Sales & Inventory Management",
            "Shopping Cart Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "Easy Product Search",
            "5 Premium Stock Photos",
            "2 Promotional Banners",
            "Interactive jQuery Slider",
            "Cross platform responsive compatibility",
            "Cross browser compatibility",
            "W3C Certified HTML",
            "Google Friendly Sitemap",
            "Complete Deployment",
            "30 Days Free Maintenance",
            "Dedicated Account Manager",
            "24/7 Customer Support",
            "Unlimited Revisions",
            "100% Satisfaction Guarantee",
          ],
        },
        {
          name: "Professional E-Commerce",
          price: "$999",
          originalPrice: "$1998",
          popular: true,
          features: [
            "Custom designed Homepage (2x concepts)",
            "10 Custom designed Inner pages",
            "Interactive and Dynamic Website Design",
            "Upto 50 - 250 Products",
            "Upto 10 Categories",
            "15 Premium Stock Photos",
            "8 Promotional Banners",
            "1 Landing Page Design",
            "Interactive jQuery Slider",
            "Customer Login/Signup Area",
            "Complete Database Creation",
            "Live Chat/Bot Chat Integration (Optional)",
            "Shipping Merchant Integration",
            "Dropshipping Integration (Optional)",
            "Content Management System",
            "Sales & Inventory Management",
            "Product offers (wish-list, discount options)",
            "Product rating & reviews",
            "Easy Product Search",
            "Full Shopping Cart Integration",
            "Payment Module Integration",
            "Social Media Integration",
            "3rd Party API Integration",
            "SEO friendly coding",
            "On-page SEO configuration",
            "90 Days Free Maintenance",
          ],
        },
        {
          name: "Elite E-Commerce",
          price: "$1899",
          originalPrice: "$3798",
          popular: false,
          features: [
            "Custom designed Homepage (3x concepts)",
            "20 Custom designed Inner pages",
            "Interactive and Dynamic Website Design",
            "Upto 1000 Products",
            "Upto 20 Categories",
            "25 Premium Stock Photos",
            "15 Promotional Banners",
            "2 Landing Pages Design",
            "Interactive jQuery Slider",
            "Customer Login/Signup Area",
            "Complete Database Creation",
            "Multi-Currency Support (Optional)",
            "Dropshipping Integration (Optional)",
            "Content Management System",
            "Sales & Inventory Management",
            "Advanced order management",
            "Product offers and variations",
            "Intelligent search system",
            "Product rating & reviews",
            "Full Shopping Cart Integration",
            "Payment Module Integration",
            "Guest Checkout",
            "Social Media Integration",
            "Email Marketing Campaigns",
            "180 Days Free Maintenance",
          ],
        },
        {
          name: "Business E-Commerce",
          price: "$4499",
          originalPrice: "$8998",
          popular: false,
          features: [
            "Custom designed Homepage (6x concepts)",
            "Unlimited Custom designed Inner pages",
            "Custom Made, Interactive, Dynamic Design",
            "High End UI/UX",
            "Custom Coding & Development",
            "Marketplace Development (Optional)",
            "Unlimited Products & Categories",
            "Bulk CSV Products Upload",
            "Product Return Management System",
            "Reward pointing system",
            "Custom Calculators",
            "Advanced product management",
            "Multi-currency Support",
            "Advanced Analytics",
            "1 Year Free Maintenance",
            "Professional Content/Copywriting",
            "Search Engine Optimization",
          ],
        },
      ],
    },
    wordpress: {
      title: "WordPress Packages",
      icon: Code,
      color: "from-orange-400 via-red-500 to-pink-600",
      packages: [
        {
          name: "WordPress Basic",
          price: "$225",
          originalPrice: "$450",
          popular: false,
          features: [
            "3 Page Website",
            "3 Banner Design",
            "1 jQuery Slider Banner",
            "FREE Google Friendly Sitemap",
            "Complete W3C Certified HTML",
            "48 to 72 hours TAT",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
        },
        {
          name: "WordPress Professional",
          price: "$645",
          originalPrice: "$1290",
          popular: true,
          features: [
            "10 Unique Pages Website",
            "CMS / Admin Panel Support",
            "8 Stock images",
            "5 Banner Designs",
            "1 jQuery Slider Banner",
            "FREE Google Friendly Sitemap",
            "48 to 72 hours TAT",
            "Complete Deployment",
            "100% Satisfaction Guarantee",
          ],
        },
        {
          name: "WordPress Elite",
          price: "$1245",
          originalPrice: "$2490",
          popular: false,
          features: [
            "Upto 15 Unique Pages Website",
            "Conceptual and Dynamic Website",
            "Mobile Responsive",
            "Online Payment Integration (Optional)",
            "Custom Forms",
            "Social Media Integration",
            "Search Engine Submission",
            "Complete Deployment",
          ],
        },
        {
          name: "WordPress Business",
          price: "$2445",
          originalPrice: "$4890",
          popular: false,
          features: [
            "15-20 Pages Website",
            "Custom Made, Interactive Design",
            "Custom WP Development",
            "Advanced Features",
            "Multi Lingual (Optional)",
            "FREE 5 Years Domain Name",
            "Complete Deployment",
          ],
        },
      ],
    },
    branding: {
      title: "Branding Packages",
      icon: Palette,
      color: "from-purple-400 via-pink-500 to-rose-600",
      packages: [
        {
          name: "Startup Collateral",
          price: "$89",
          originalPrice: "$178",
          popular: false,
          features: [
            "2 Stationery Design Set",
            "FREE Fax Template",
            "Print Ready Formats",
            "UNLIMITED Revisions",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
          ],
        },
        {
          name: "Collateral Classic",
          price: "$189",
          originalPrice: "$378",
          popular: true,
          features: [
            "2 Stationery Design Set",
            "UNLIMITED Revisions",
            "Flyer Design",
            "Brochure Design (Bi-fold/Tri-fold)",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
          ],
        },
        {
          name: "Premium Collateral",
          price: "$389",
          originalPrice: "$778",
          popular: false,
          features: [
            "2 Stationery Design Set",
            "Packaging Design",
            "UNLIMITED Revisions",
            "T-Shirt Design",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
          ],
        },
        {
          name: "Unlimited Collateral",
          price: "$489",
          originalPrice: "$978",
          popular: false,
          features: [
            "2 Stationery Design Set",
            "Menu Card Design",
            "T-Shirt Design",
            "1 Banner Design",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
          ],
        },
      ],
    },
    marketing: {
      title: "Marketing Packages",
      icon: TrendingUp,
      color: "from-cyan-400 via-blue-500 to-purple-600",
      packages: [
        {
          name: "Startup Plan",
          price: "$299",
          originalPrice: null,
          popular: false,
          features: [
            "1 Platform Management",
            "Social Media Posts (8/month)",
            "Story Creation & Sharing: 3",
            "Social Media strategy",
            "Competitor Analysis",
            "Copywriting",
            "Content Plan Creation",
            "Facebook Ad Campaigns setup",
            "Community Management",
            "Page Optimization",
            "1000 Likes on Facebook page",
          ],
        },
        {
          name: "Scaling Plan",
          price: "$699",
          originalPrice: null,
          popular: true,
          features: [
            "2 Platform Management",
            "Social Media Posts (16/month)",
            "Story Creation & Sharing: 6",
            "Social Media Strategy",
            "Competitor Analysis",
            "Facebook Ad Campaigns setup",
            "Community Management",
            "Page Optimization",
            "1000 Likes on Facebook page",
            "1000 Likes on Instagram",
            "Facebook Ad Campaign Optimization",
          ],
        },
        {
          name: "Venture Plan",
          price: "$999",
          originalPrice: null,
          popular: false,
          features: [
            "4 Platform Management",
            "Social Media Posts (24/month)",
            "Story Creation & Sharing: 10",
            "Social Media Strategy",
            "Competitor Analysis",
            "Facebook Ad Campaigns setup",
            "10000 Likes on Facebook page",
            "2000 Likes on Instagram",
            "Facebook Ads A/B Testing",
          ],
        },
      ],
    },
    seo: {
      title: "SEO Packages",
      icon: Search,
      color: "from-green-400 via-emerald-500 to-teal-600",
      packages: [
        {
          name: "Startup Plan",
          price: "$499",
          originalPrice: "$998",
          popular: false,
          features: [
            "Campaign Setup And Optimization",
            "Website Audit",
            "Pages Optimized (10 Pages)",
            "15 Selected Keywords Targeting",
            "Keyword Research & Mapping",
            "On-Page Optimization",
            "SEO Road Map",
            "Blog Creation",
            "Title Tag Optimization",
            "Meta Description Optimization",
            "Social Bookmarking",
            "Link Building",
            "Directory Submission",
          ],
        },
        {
          name: "Scaling Plan",
          price: "$699",
          originalPrice: "$1398",
          popular: true,
          features: [
            "Business & Competitor Analysis",
            "35 Selected Keywords Targeting",
            "15 Pages Keyword Targeted",
            "Webpage Optimization",
            "Meta Tags Creation",
            "Google Analytics Installation",
            "Google Webmaster Installation",
            "Monthly Reporting",
            "Email & Phone Support",
            "Social Bookmarking",
            "Link Building",
            "Local Business Listings",
          ],
        },
        {
          name: "Venture Plan",
          price: "$1199",
          originalPrice: "$2398",
          popular: false,
          features: [
            "Comprehensive Analysis",
            "60+ Selected Keywords Targeting",
            "30 Pages Keyword Targeted",
            "Advanced Optimization",
            "Google Places Inclusions",
            "Advanced Tracking & Analysis",
            "Monthly Reporting",
            "Dedicated Support",
            "Advanced Link Building",
            "Local Business Optimization",
          ],
        },
      ],
    },
  }

  type PackageCategoryKey = keyof typeof packageCategories // Define the type for keys

  const [activeTab, setActiveTab] = useState<PackageCategoryKey>("website") // Use the defined type

  const tabs: { key: PackageCategoryKey; label: string; icon: any }[] = [
    { key: "website", label: "Website Designs", icon: Globe },
    { key: "ecommerce", label: "Ecommerce", icon: ShoppingCart },
    { key: "wordpress", label: "WordPress", icon: Code },
    { key: "branding", label: "Branding", icon: Palette },
    { key: "marketing", label: "Marketing", icon: TrendingUp },
    { key: "seo", label: "SEO", icon: Search },
  ]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

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
      </motion.div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full text-purple-300 font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              PRICING PACKAGES
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Captivating
              </span>{" "}
              designs within budget-friendly{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                packages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Website Design Innovation can transform even the most unconventional ideas into sophisticated designs,
              remarkable experiences, and memorable brands.
            </p>
          </motion.div>
          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.key
                        ? `bg-gradient-to-r ${packageCategories[tab.key].color} text-white shadow-2xl`
                        : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    {tab.label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
          {/* Packages Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packageCategories[activeTab].packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.popular
                    ? `border-gradient-to-r ${packageCategories[activeTab].color} shadow-2xl`
                    : "border-slate-700/30 hover:border-slate-600/50"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${packageCategories[activeTab].color} rounded-full text-white text-sm font-semibold shadow-lg`}
                    >
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          50% OFF
                        </span>
                        <span className="text-gray-400 line-through">{pkg.originalPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.slice(0, 8).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 8 && (
                    <div className="text-center pt-2">
                      <span className="text-purple-400 text-sm font-medium">
                        +{pkg.features.length - 8} more features
                      </span>
                    </div>
                  )}
                </div>
                {/* CTA Button */}
                <div className="space-y-4">
                  <Button
                    className={`w-full bg-gradient-to-r ${packageCategories[activeTab].color} hover:opacity-90 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg`}
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border border-slate-600/50 text-gray-300 hover:bg-slate-700/50 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${packageCategories[activeTab].color} opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find the perfect package? Let's create a custom solution tailored specifically to your unique
                requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0"
                >
                  <Zap className="mr-3 h-6 w-6" />
                  Get Custom Quote
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
