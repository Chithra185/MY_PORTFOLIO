import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    company: 'Mind Matrix',
    role: 'Android Developer Intern',
    duration: '2024 · 4 Months',
    location: 'Bengaluru',
    color: 'accent',
    points: [
      'Developed Android applications using Kotlin and Jetpack Compose for modern UI.',
      'Implemented MVVM architecture for scalable, maintainable codebases.',
      'Integrated Firebase authentication and REST APIs for dynamic data flow.',
      'Built reusable UI components to accelerate development velocity.',
      'Improved UI responsiveness and overall app performance metrics.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'REST API'],
  },
  {
    company: 'Varcons Technology',
    role: 'Frontend Developer Intern',
    duration: '2024 · 1 Month',
    location: 'Remote',
    color: 'accent2',
    points: [
      'Built responsive frontend interfaces using HTML, CSS, and JavaScript.',
      'Developed reusable UI components for consistent design patterns.',
      'Collaborated in a team using Git and GitHub version control workflows.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
  },
]

const colorMap = {
  accent: { dot: '#6ee7f7', ring: 'rgba(110,231,247,0.2)', tag: 'rgba(110,231,247,0.1)', tagBorder: 'rgba(110,231,247,0.25)', text: '#6ee7f7' },
  accent2: { dot: '#a78bfa', ring: 'rgba(167,139,250,0.2)', tag: 'rgba(167,139,250,0.1)', tagBorder: 'rgba(167,139,250,0.25)', text: '#a78bfa' },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">03. work experience</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-lg mx-auto">
            Hands-on experience building real-world applications across mobile and web.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color]
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-0`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full z-10 flex items-center justify-center -translate-x-1.5"
                    style={{ background: c.dot, boxShadow: `0 0 12px ${c.dot}66` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-bg" />
                  </div>

                  {/* Spacer on mobile / empty half on desktop */}
                  <div className="w-12 md:w-1/2 flex-shrink-0" />

                  {/* Card */}
                  <div className={`flex-1 ml-8 md:ml-0 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div
                      className="glass rounded-2xl p-7 hover:glow-accent transition-all duration-300 hover:-translate-y-1"
                      style={{ border: `1px solid ${c.ring}` }}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <FiBriefcase size={14} style={{ color: c.text }} />
                            <span
                              className="font-mono text-xs font-medium"
                              style={{ color: c.text }}
                            >
                              {exp.company}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-lg text-text">{exp.role}</h3>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1.5 text-muted font-mono text-xs">
                            <FiCalendar size={12} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1.5 text-muted font-mono text-xs">
                            <FiMapPin size={12} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-2 mb-5">
                        {exp.points.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-3 font-body text-sm text-muted">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: c.dot }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2.5 py-1 rounded-lg"
                            style={{ background: c.tag, border: `1px solid ${c.tagBorder}`, color: c.text }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
