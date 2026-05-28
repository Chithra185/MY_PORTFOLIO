import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiCode, FiSmartphone, FiCpu, FiGlobe } from 'react-icons/fi'

function Counter({ target, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 4, suffix: '+', label: 'Projects Built' },
  { value: 2, suffix: '', label: 'Internships' },
  { value: 8, suffix: '.56', label: 'CGPA' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

const focuses = [
  {
    icon: FiSmartphone,
    title: 'Android Development',
    desc: 'Building native apps with Kotlin, Jetpack Compose, and MVVM architecture.',
    color: 'accent',
  },
  {
    icon: FiCode,
    title: 'Frontend Development',
    desc: 'Crafting responsive, modern UIs with React JS and clean HTML/CSS/JS.',
    color: 'accent2',
  },
  {
    icon: FiCpu,
    title: 'AI / ML Engineering',
    desc: 'Developing intelligent systems using TensorFlow, OpenCV, and deep learning.',
    color: 'accent3',
  },
  {
    icon: FiGlobe,
    title: 'Full-Stack Thinking',
    desc: 'Connecting frontend experiences to robust backends and real-time databases.',
    color: 'accent',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">01. about me</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            Building for the <span className="text-gradient">Future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted font-body leading-relaxed text-base">
              <p>
                I'm <span className="text-text font-medium">Chithrashree G C</span>, a Computer Science Engineering student at East West College of Engineering, Bengaluru, passionate about building technology that matters.
              </p>
              <p>
                My journey spans <span className="text-accent">Android development</span> with Kotlin and Jetpack Compose, <span className="text-accent2">frontend engineering</span> with React JS, and <span className="text-accent3">AI/ML systems</span> using TensorFlow and OpenCV — giving me a versatile perspective on modern software.
              </p>
              <p>
                Through two internships and multiple independent projects, I've developed a strong foundation in building scalable, user-friendly applications that solve real-world problems. I thrive at the intersection of clean code, thoughtful design, and intelligent systems.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest in generative AI, contributing to open-source, and continuously expanding my technical toolkit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Bengaluru, Karnataka', 'Open to Relocation', 'B.E. CSE — 2026'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full glass border-gradient font-mono text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass border-gradient rounded-2xl p-6 text-center hover:glow-accent transition-all duration-300"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-gradient mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-xs text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Focus cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass border-gradient rounded-2xl p-6 group hover:glow-accent transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-${focus.color}/10 text-${focus.color}`}>
                <focus.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-sm text-text mb-2">{focus.title}</h3>
              <p className="font-body text-xs text-muted leading-relaxed">{focus.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
