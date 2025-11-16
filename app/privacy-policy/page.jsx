"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function PrivacyPolicyPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Scroll spy for table of contents
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('data-section')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const tableOfContents = [
    { id: "overview", title: "Overview" },
    { id: "information-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use It" },
    { id: "data-storage", title: "Data Storage & Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "sharing", title: "Sharing of Information" },
    { id: "user-rights", title: "User Rights" },
    { id: "third-party", title: "Third-Party Links" },
    { id: "children", title: "Children's Privacy" },
    { id: "updates", title: "Updates to Policy" },
    { id: "contact", title: "Contact Information" }
  ]

  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-section="${id}"]`)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 ${
        darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-green-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                darkMode 
                  ? 'bg-green-900/30 text-green-400 border border-green-800' 
                  : 'bg-green-100 text-green-700'
              }`}
            >
              🔒 Your Privacy Matters
            </motion.div>

            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Privacy Policy
            </h1>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Last updated: November 15, 2025
            </p>
            <p className={`text-base mt-4 max-w-3xl mx-auto ${
              darkMode ? 'text-slate-500' : 'text-slate-500'
            }`}>
              Effective Date: November 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Table of Contents Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className={`sticky top-24 p-6 rounded-2xl border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-slate-200'
              }`}>
                <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? darkMode
                            ? 'bg-green-900/30 text-green-400 font-semibold'
                            : 'bg-green-50 text-green-600 font-semibold'
                          : darkMode
                            ? 'text-slate-400 hover:text-green-400 hover:bg-slate-700/50'
                            : 'text-slate-600 hover:text-green-600 hover:bg-slate-50'
                      }`}
                    >
                      {idx + 1}. {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} space-y-12`}>
                
                {/* 1. Overview */}
                <section data-section="overview">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Overview
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Venturemond ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="leading-relaxed">
                    By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </section>

                {/* 2. Information We Collect */}
                <section data-section="information-collect">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    2. Information We Collect
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We collect several types of information from and about users of our services:
                  </p>
                  
                  <h3 className={`text-xl font-semibold mb-3 mt-6 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Personal Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Professional information (company name, job title)</li>
                    <li>Project requirements and business needs</li>
                    <li>Payment and billing information</li>
                  </ul>

                  <h3 className={`text-xl font-semibold mb-3 mt-6 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Technical Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </section>

                {/* 3. How We Use It */}
                <section data-section="how-we-use">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    3. How We Use Your Information
                  </h2>
                  <p className="leading-relaxed mb-3">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To process transactions and send related information</li>
                    <li>To respond to your comments, questions, and requests</li>
                    <li>To send you technical notices, updates, and support messages</li>
                    <li>To communicate about products, services, offers, and events</li>
                    <li>To monitor and analyze trends, usage, and activities</li>
                    <li>To detect, prevent, and address technical issues and security threats</li>
                    <li>To comply with legal obligations and enforce our terms</li>
                  </ul>
                </section>

                {/* 4. Data Storage & Security */}
                <section data-section="data-storage">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    4. Data Storage & Security
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Our security measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="leading-relaxed">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>

                {/* 5. Data Retention */}
                <section data-section="data-retention">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    5. Data Retention
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p className="leading-relaxed">
                    When we no longer need your personal information, we will securely delete or anonymize it. Retention periods vary depending on the type of data and the purpose for which it was collected.
                  </p>
                </section>

                {/* 6. Sharing of Information */}
                <section data-section="sharing">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    6. Sharing of Information
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With vendors and contractors who perform services on our behalf</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
                  </ul>
                </section>

                {/* 7. User Rights */}
                <section data-section="user-rights">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    7. Your Rights
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p className="leading-relaxed">
                    To exercise these rights, please contact us at hello@venturemond.com. We will respond to your request within a reasonable timeframe.
                  </p>
                </section>

                {/* 8. Third-Party Links */}
                <section data-section="third-party">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    8. Third-Party Links
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Our website may contain links to third-party websites or services that are not owned or controlled by Venturemond. We are not responsible for the privacy practices or content of these third-party sites.
                  </p>
                  <p className="leading-relaxed">
                    We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by our website and services.
                  </p>
                </section>

                {/* 9. Children's Privacy */}
                <section data-section="children">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    9. Children's Privacy
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                  </p>
                  <p className="leading-relaxed">
                    If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information as soon as possible. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                {/* 10. Updates to Policy */}
                <section data-section="updates">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    10. Updates to This Policy
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p className="leading-relaxed mb-4">
                    We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                  <p className="leading-relaxed">
                    Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                  </p>
                </section>

                {/* 11. Contact Information */}
                <section data-section="contact">
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    11. Contact Information
                  </h2>
                  <p className="leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className={`p-6 rounded-xl border ${
                    darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <p className="mb-2"><strong>Venturemond</strong></p>
                    <p className="mb-2">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:hello@venturemond.com" className={`${
                        darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'
                      } transition-colors`}>
                        hello@venturemond.com
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Address:</strong> Hyderabad, Telangana, India
                    </p>
                  </div>
                </section>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`py-16 ${
        darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Have Questions About Your Privacy?
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            We're here to help. Contact us anytime.
          </p>
          <a
            href="mailto:hello@venturemond.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
