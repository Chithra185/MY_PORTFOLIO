import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async send
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const info = [
    { icon: FiMail, label: 'Email', value: 'chithrashreechithra005@gmail.com', href: 'mailto:chithrashreechithra005@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 70191 19252', href: 'tel:+917019119252' },
    { icon: FiMapPin, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">07. contact</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-lg mx-auto">
            Open to new opportunities, collaborations, and conversations. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass border-gradient rounded-2xl p-5 flex items-center gap-4 hover:glow-accent transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(110,231,247,0.1)', border: '1px solid rgba(110,231,247,0.2)' }}
                >
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-body text-sm text-text hover:text-accent transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-text">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass border-gradient rounded-2xl p-5"
            >
              <p className="font-mono text-xs text-muted mb-4">Find me on</p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-accent hover:glow-accent transition-all duration-300 hover:-translate-y-1"
                    style={{ border: '1px solid rgba(110,231,247,0.15)' }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass border-gradient rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input w-full px-4 py-3 rounded-xl font-body text-sm"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl font-body text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted mb-2 block">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your message..."
                  className="form-input w-full px-4 py-3 rounded-xl font-body text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-accent3/20 border border-accent3/30 text-accent3'
                    : 'btn-primary'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full"
                    />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheck size={16} />
                    Message Sent!
                  </>
                )}
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center font-body text-sm text-accent3"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
