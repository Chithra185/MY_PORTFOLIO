import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiStar, FiZap } from 'react-icons/fi'

const achievements = [
  {
    icon: FiAward,
    title: 'Frontend Web Development',
    subtitle: 'Internship Certification',
    desc: 'Completed a certified internship in frontend development, building production-ready interfaces with HTML, CSS, and JavaScript.',
    color: 'accent2',
    year: '2024',
  },
  {
    icon: FiStar,
    title: 'Android App Development',
    subtitle: 'with Generative AI — Certification',
    desc: 'Certified in Android application development with Generative AI integration, using Kotlin, Jetpack Compose, and modern AI APIs.',
    color: 'accent',
    year: '2024',
  },
  {
    icon: FiZap,
    title: 'Multi-Domain Projects',
    subtitle: 'AI, Android & Web',
    desc: 'Successfully built and deployed 4+ projects spanning AI/ML (TensorFlow, OpenCV), Android (Kotlin), and Web (React JS) domains.',
    color: 'accent3',
    year: '2022–2026',
  },
]

const colorMap = {
  accent: { bg: 'rgba(110,231,247,0.08)', border: 'rgba(110,231,247,0.2)', text: '#6ee7f7', top: '#6ee7f7' },
  accent2: { bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)', text: '#a78bfa', top: '#a78bfa' },
  accent3: { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', text: '#34d399', top: '#34d399' },
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent3/3 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">06. achievements</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            Milestones & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const c = colorMap[item.color]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="achievement-card glass rounded-2xl p-7 transition-all duration-300 hover:glow-accent"
                style={{
                  border: `1px solid ${c.border}`,
                  '--top-color': c.top,
                }}
              >
                {/* Top stripe is done via the achievement-card::before in CSS with static gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${c.top}, transparent)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <item.icon size={22} style={{ color: c.text }} />
                </div>

                <div className="mb-1">
                  <span className="font-mono text-xs" style={{ color: c.text }}>{item.year}</span>
                </div>

                <h3 className="font-display font-semibold text-base text-text mb-1">{item.title}</h3>
                <p className="font-body text-xs font-medium mb-3" style={{ color: c.text }}>{item.subtitle}</p>
                <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
