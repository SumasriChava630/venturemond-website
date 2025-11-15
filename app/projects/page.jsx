"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Project data with full details
const projectsData = {
  'project-alpha': {
    title: 'Project Alpha',
    category: 'Web Design',
    client: 'Tech Startup Inc.',
    duration: '3 months',
    year: '2024',
    heroImage: '/images/project/alpha.jpg',
    overview: 'A comprehensive redesign of a SaaS platform aimed at improving user experience and conversion rates. We worked closely with the client to understand their users and create a modern, intuitive interface.',
    challenge: 'The existing platform had a cluttered interface with poor user flow, resulting in high bounce rates and low conversion. Users found it difficult to navigate and complete key actions.',
    solution: 'We conducted user research, created wireframes and prototypes, and implemented a clean, modern design system with improved navigation and clear call-to-actions.',
    results: [
      { metric: '65%', label: 'Increase in conversions' },
      { metric: '40%', label: 'Reduced bounce rate' },
      { metric: '85%', label: 'User satisfaction score' },
      { metric: '2.5x', label: 'Time on site increase' }
    ],
    images: [
      '/images/project/alpha.jpg',
      '/images/project/alpha.jpg',
      '/images/project/alpha.jpg'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    testimonial: {
      text: 'Venturemond transformed our platform beyond our expectations. The new design not only looks amazing but has significantly improved our user engagement and conversion rates.',
      author: 'Sarah Johnson',
      role: 'CEO, Tech Startup Inc.'
    }
  },
  'project-beta': {
    title: 'Project Beta',
    category: 'Mobile App',
    client: 'Fitness Pro',
    duration: '4 months',
    year: '2024',
    heroImage: '/images/project/beta.jpg',
    overview: 'A mobile fitness app designed to help users track workouts, set goals, and connect with trainers. Built with a focus on simplicity and motivation.',
    challenge: 'Creating an app that motivates users to maintain consistent workout routines while keeping the interface simple and not overwhelming.',
    solution: 'We designed a gamified experience with progress tracking, achievements, and social features that encourage accountability and consistency.',
    results: [
      { metric: '50k+', label: 'Active users in 3 months' },
      { metric: '4.8', label: 'App Store rating' },
      { metric: '75%', label: 'Monthly retention rate' },
      { metric: '3.2M', label: 'Workouts completed' }
    ],
    images: [
      '/images/project/beta.jpg',
      '/images/project/beta.jpg',
      '/images/project/beta.jpg'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Figma'],
    testimonial: {
      text: 'The app exceeded all our expectations. Users love the design and the engagement metrics speak for themselves.',
      author: 'Mike Chen',
      role: 'Founder, Fitness Pro'
    }
  },
  'project-gamma': {
    title: 'Project Gamma',
    category: 'Branding',
    client: 'EcoLife Products',
    duration: '2 months',
    year: '2024',
    heroImage: '/images/project/gamma.jpg',
    overview: 'Complete brand identity redesign for an eco-friendly products company, including logo, color palette, typography, and brand guidelines.',
    challenge: 'The existing brand felt outdated and didn\'t communicate the company\'s commitment to sustainability and modern eco-conscious values.',
    solution: 'We created a fresh, modern identity using earthy tones and clean typography that reflects sustainability while maintaining a premium feel.',
    results: [
      { metric: '120%', label: 'Brand recognition increase' },
      { metric: '45%', label: 'Sales growth' },
      { metric: '90%', label: 'Customer approval rating' },
      { metric: '10k+', label: 'Social media followers gained' }
    ],
    images: [
      '/images/project/gamma.jpg',
      '/images/project/gamma.jpg',
      '/images/project/gamma.jpg'
    ],
    technologies: ['Adobe Illustrator', 'Figma', 'Photoshop', 'InDesign'],
    testimonial: {
      text: 'Our new brand identity perfectly captures who we are. The response from customers has been overwhelmingly positive.',
      author: 'Emily Rodriguez',
      role: 'Marketing Director, EcoLife Products'
    }
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const project = projectsData[params.slug]
  const [selectedImage, setSelectedImage] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Project Not Found</h1>
          <p className={`mb-8 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-green-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className={`flex items-center gap-2 text-sm mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <button onClick={() => router.push('/')} className={`transition-colors ${
                darkMode ? 'hover:text-green-400' : 'hover:text-green-600'
              }`}>
                Home
              </button>
              <span>/</span>
              <button onClick={() => router.push('/#projects')} className={`transition-colors ${
                darkMode ? 'hover:text-green-400' : 'hover:text-green-600'
              }`}>
                Projects
              </button>
              <span>/</span>
              <span className={`font-medium ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>{project.title}</span>
            </div>

            {/* Title & Meta */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <span className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4 ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-400 border border-green-800' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {project.category}
                </span>
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h1>
                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Duration', value: project.duration },
                  { label: 'Year', value: project.year },
                  { label: 'Category', value: project.category }
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-xl shadow-sm border ${
                    darkMode 
                      ? 'bg-slate-800 border-slate-700' 
                      : 'bg-white border-slate-200'
                  }`}>
                    <div className={`text-sm mb-1 ${
                      darkMode ? 'text-slate-500' : 'text-slate-600'
                    }`}>{item.label}</div>
                    <div className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl shadow-lg border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>The Challenge</h2>
              <p className={`leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl shadow-lg border ${
                darkMode 
                  ? 'bg-gradient-to-br from-green-900/30 to-slate-800 border-green-800' 
                  : 'bg-gradient-to-br from-green-50 to-white border-green-200'
              }`}
            >
              <div className="text-4xl mb-4">💡</div>
              <h2 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>The Solution</h2>
              <p className={`leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`py-16 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Results That Matter</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              Measurable impact and success metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow ${
                  darkMode ? 'bg-slate-800' : 'bg-white'
                }`}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {result.metric}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Project Gallery</h2>
          
          {/* Main Selected Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-6"
          >
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-32 rounded-lg overflow-hidden transition-all ${
                  selectedImage === idx 
                    ? darkMode 
                      ? 'ring-4 ring-green-500 scale-105' 
                      : 'ring-4 ring-green-600 scale-105'
                    : darkMode
                      ? 'hover:ring-2 hover:ring-slate-600'
                      : 'hover:ring-2 hover:ring-slate-300'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className={`py-16 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`px-6 py-3 font-semibold rounded-full border-2 transition-all ${
                  darkMode 
                    ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-green-500 hover:text-green-400' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-green-600 hover:text-green-600'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-green-600 to-green-700 p-12 rounded-3xl shadow-2xl text-white text-center"
          >
            <div className="text-5xl mb-6">💬</div>
            <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed italic">
              "{project.testimonial.text}"
            </p>
            <div className="border-t border-white/20 pt-6">
              <div className="font-bold text-lg">{project.testimonial.author}</div>
              <div className="text-green-100">{project.testimonial.role}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-900'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Let's create something amazing together
          </p>
          <button
            onClick={() => router.push('/#contact')}
            className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
              darkMode 
                ? 'bg-green-600 text-white hover:bg-green-500' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Get In Touch
          </button>
        </div>
      </section>

    </main>
  )
}
