import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(110,231,247,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,231,247,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg opacity-80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gradient mb-8">
            <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse-slow" />
            <span className="font-mono text-xs text-muted">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-gradient block sm:inline">
              Chithrashree
            </span>
            <span className="text-gradient block">G C</span>
          </motion.h1>

          {/* Typing roles */}
          <motion.div variants={itemVariants} className="font-display text-xl sm:text-2xl text-muted mb-6 h-9">
            <span className="text-accent">{'< '}</span>
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Android Developer', 2000,
                'Frontend Developer', 2000,
                'AI / ML Enthusiast', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text"
            />
            <span className="text-accent">{' />'}</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="font-body text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Computer Science Engineering student with hands-on experience in Android, frontend, and AI-powered application development.
            Skilled in <span className="text-accent">Java, Kotlin, React JS, TensorFlow</span>, and modern software technologies with practical internship experience building scalable and responsive applications.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
          
            <button
              onClick={scrollToProjects}
              className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm"
            >
              View Projects
              <FiArrowDown size={16} />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 justify-center lg:justify-start">
            <span className="text-muted text-sm font-mono">Connect:</span>
            {[
              { href: 'https://github.com/Chithra185', icon: FiGithub, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:chithrashreechithra005@gmail.com', icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass border-gradient flex items-center justify-center text-muted hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #6ee7f7, #a78bfa, #34d399, transparent, #6ee7f7)',
                padding: '2px',
              }}
            >
              <div className="w-full h-full rounded-full bg-bg" />
            </motion.div>

            {/* Static inner circle with gradient */}
            <div className="absolute inset-4 rounded-full glass flex items-center justify-center overflow-hidden"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(110,231,247,0.1), rgba(167,139,250,0.1), transparent)' }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="font-display font-bold text-6xl sm:text-8xl text-gradient">C</span>
                </motion.div>
                <p className="font-mono text-xs text-muted mt-1">cs engineer</p>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { text: 'Kotlin', hexColor: '#6ee7f7', top: '0%', left: '65%', delay: 0 },
              { text: 'React', hexColor: '#a78bfa', top: '75%', left: '70%', delay: 1 },
              { text: 'AI/ML', hexColor: '#34d399', top: '80%', left: '-10%', delay: 2 },
              { text: 'Java', hexColor: '#6ee7f7', top: '10%', left: '-15%', delay: 1.5 },
            ].map(({ text, hexColor, top, left, delay }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + delay * 0.2, duration: 0.5 }}
                className="glass border-gradient px-3 py-1 rounded-full font-mono text-xs font-medium animate-float"
                style={{ position: 'absolute', top, left, color: hexColor, animationDelay: `${delay}s` }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 rounded-full border border-border flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
