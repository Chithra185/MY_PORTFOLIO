import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPython, SiJavascript, SiKotlin, SiMysql, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiTensorflow,
  SiOpencv, SiGit, SiGithub, SiAndroidstudio, SiPostman,
  SiJetpackcompose
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const skillGroups = [
  {
    title: 'Languages',
    color: 'accent',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'SQL', icon: SiMysql },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ]
  },
  {
    title: 'Frameworks & Technologies',
    color: 'accent2',
    skills: [
      { name: 'React JS', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Jetpack Compose', icon: SiJetpackcompose },
    ]
  },
  {
    title: 'Databases & Libraries',
    color: 'accent3',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'OpenCV', icon: SiOpencv },
    ]
  },
  {
    title: 'Developer Tools',
    color: 'accent',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'Postman', icon: SiPostman },
    ]
  },
]

const colorMap = {
  accent: { bg: 'rgba(110,231,247,0.08)', border: 'rgba(110,231,247,0.2)', text: '#6ee7f7' },
  accent2: { bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)', text: '#a78bfa' },
  accent3: { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', text: '#34d399' },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/3 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-3 block">02. technical skills</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-lg mx-auto">
            A curated set of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.15, duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-mono text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                  >
                    {group.title}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + gi * 0.15 + si * 0.06 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="skill-tag glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
                      style={{ border: `1px solid ${c.border}22` }}
                    >
                      <skill.icon
                        size={18}
                        style={{ color: c.text }}
                        className="flex-shrink-0"
                      />
                      <span className="font-body text-sm text-text">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
