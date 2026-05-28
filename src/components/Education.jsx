import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">05. education</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative overflow-hidden glass rounded-3xl p-8 sm:p-12"
          style={{
            border: '1px solid rgba(110,231,247,0.2)',
            background: 'radial-gradient(ellipse at top right, rgba(110,231,247,0.06), transparent 60%)',
          }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="150" cy="50" r="80" stroke="url(#eg)" strokeWidth="1" />
              <circle cx="150" cy="50" r="50" stroke="url(#eg)" strokeWidth="1" />
              <defs>
                <linearGradient id="eg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6ee7f7" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8 relative">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(110,231,247,0.1)', border: '1px solid rgba(110,231,247,0.25)' }}
            >
              <FiBookOpen size={28} className="text-accent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text mb-1">
                    East West College of Engineering
                  </h3>
                  <p className="font-body text-muted text-base">
                    Bachelor of Engineering in Computer Science Engineering
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)' }}
                >
                  <FiCalendar size={13} className="text-accent3" />
                  <span className="font-mono text-xs text-accent3">2022 – 2026</span>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex flex-wrap gap-5 mt-6">
                <div className="glass rounded-2xl px-6 py-4 flex items-center gap-3"
                  style={{ border: '1px solid rgba(110,231,247,0.15)' }}
                >
                  <FiAward className="text-accent" size={20} />
                  <div>
                    <div className="font-display font-bold text-2xl text-gradient">8.56</div>
                    <div className="font-mono text-xs text-muted">CGPA</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-center">
                  {['Computer Science Engineering', 'Bengaluru, Karnataka'].map(item => (
                    <div key={item} className="flex items-center gap-2 font-body text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
