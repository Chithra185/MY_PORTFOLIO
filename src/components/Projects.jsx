import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const allProjects = [
  {
    title: 'Hand Gesture Recognition Using CNN',
    category: 'AI/ML',
    description: 'Real-time hand gesture recognition system using CNN and webcam-based live detection. Implemented image preprocessing and TensorFlow classification for accurate gesture prediction and optimized inference performance for smooth real-time interaction.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/Chithra185',
    color: 'accent3',
    emoji: '✋',
  },
  {
    title: 'Video Anomaly Detection',
    category: 'AI/ML',
    description: 'AI-powered real-time video anomaly detection system designed to identify suspicious or abnormal activities using computer vision and deep learning. Modules include weapon detection, fire detection, crowd monitoring, shoplifting, vandalism, accident detection, and fighting detection.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
    github: 'https://github.com/Chithra185/VIDEO_ANOMALY_DETECTION',
    color: 'accent',
    emoji: '🎥',
  },
  {
    title: 'AI-Powered Android Application',
    category: 'Android',
    description: 'AI-integrated Android application using MVVM architecture and responsive Jetpack Compose UI. Integrated Gemini API for real-time AI-generated responses and dynamic user interactions.',
    tech: ['Kotlin', 'Jetpack Compose', 'Gemini API'],
    github: 'https://github.com/Chithra185',
    color: 'accent2',
    emoji: '🤖',
  },
  {
    title: 'AZAD Technologies Business Website',
    category: 'Web',
    description: 'Designed and deployed a responsive business portfolio website with modern UI/UX practices, cross-platform responsiveness, and optimized performance for AZAD Technologies.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Chithra185',
    color: 'accent3',
    emoji: '🌐',
  },
]

const filters = ['All', 'AI/ML', 'Android', 'Web']

const colorMap = {
  accent: { glow: 'rgba(110,231,247,0.12)', border: 'rgba(110,231,247,0.25)', text: '#6ee7f7', tag: 'rgba(110,231,247,0.08)', tagBorder: 'rgba(110,231,247,0.2)' },
  accent2: { glow: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)', text: '#a78bfa', tag: 'rgba(167,139,250,0.08)', tagBorder: 'rgba(167,139,250,0.2)' },
  accent3: { glow: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)', text: '#34d399', tag: 'rgba(52,211,153,0.08)', tagBorder: 'rgba(52,211,153,0.2)' },
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent2/3 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-accent mb-3 block">04. projects</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            What I've <span className="text-gradient">Built</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-lg mx-auto">
            A selection of projects spanning AI/ML, Android, and web development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-xs px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-accent text-bg font-medium shadow-lg shadow-accent/20'
                  : 'glass border-gradient text-muted hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const c = colorMap[project.color]
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="project-card glass rounded-2xl p-7 flex flex-col group"
                  style={{
                    border: `1px solid ${c.border}40`,
                    background: `radial-gradient(ellipse at top left, ${c.glow}, transparent 60%)`,
                  }}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: c.tag, border: `1px solid ${c.tagBorder}` }}
                    >
                      {project.emoji}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-full"
                        style={{ background: c.tag, border: `1px solid ${c.tagBorder}`, color: c.text }}
                      >
                        {project.category}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full glass flex items-center justify-center text-muted hover:text-text transition-all duration-200 hover:scale-110"
                        aria-label="View on GitHub"
                      >
                        <FiGithub size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-base text-text mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-lg"
                        style={{ background: c.tag, border: `1px solid ${c.tagBorder}`, color: c.text }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Chithra185"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-full font-body font-medium text-sm"
          >
            <FiGithub size={16} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
