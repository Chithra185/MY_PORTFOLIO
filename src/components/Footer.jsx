import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border/50 py-10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <button
            onClick={scrollToTop}
            className="font-display font-bold text-xl text-gradient hover:opacity-80 transition-opacity"
          >
            Chithrashree G C
          </button>

          {/* Links */}
          <div className="flex items-center gap-4">
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
                className="w-9 h-9 rounded-full glass border-gradient flex items-center justify-center text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 font-body text-xs text-muted">
            <span>© {new Date().getFullYear()} Chithrashree G C</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <FiHeart size={10} className="text-accent2" fill="currentColor" /> in React
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
