import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import styles from './experience.module.css'

export const Route = createFileRoute('/experience')({
  component: ExperiencePage,
})

const EXPERIENCES = [
  {
    company: 'modern.',
    dates: 'Nov 2025 to Present',
    title: 'Co-Founder',
    description:
      'Founding an enterprise-grade AI agent orchestration platform designed to automate complex workflows.',
  },
  {
    company: 'Nike — SNKRS',
    dates: 'Sep 2022 to Present',
    title: 'Senior Software Engineer',
    description:
      'Enabled new SNKRS experiences, improved API performance, helped make SNKRS available in Greater China and Korea, and led monitoring improvements.',
  },
  {
    company: 'Nike — Internal Tools',
    dates: 'Nov 2019 to Sep 2022',
    title: 'Senior Software Engineer',
    description:
      'Led backend development on internal dashboards and a custom email/slack campaign platform used by senior leadership and ops teams.',
  },
  {
    company: 'Nike — SRE',
    dates: 'Aug 2018 to Nov 2019',
    title: 'Site Reliability Engineer',
    description:
      'Implemented distributed tracing in various services, was responsible for KLO services, and chaos tested customer facing services.',
  },
]

function ExperiencePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>EXPERIENCE</h1>
        <Link to="/" className={styles.homeLink}>
          [home]
        </Link>
      </div>

      {/* Desktop: two-column static list */}
      <div className={styles.entries}>
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className={styles.entry}>
            <div className={styles.entryLeft}>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.dates}>{exp.dates}</p>
            </div>
            <div className={styles.entryRight}>
              <p className={styles.title}>{exp.title}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className={styles.mobileEntries}>
        {EXPERIENCES.map((exp, idx) => {
          const isOpen = openIdx === idx
          return (
            <div key={exp.company} className={styles.mobileEntry}>
              <div
                className={[styles.mobileTop, isOpen && styles.open].filter(Boolean).join(' ')}
              >
                <div className={styles.mobileTopRow}>
                  <p className={styles.mobileCompany}>{exp.company}</p>
                  <button
                    className={styles.mobileToggle}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${exp.company}`}
                  >
                    {isOpen ? '[-]' : '[+]'}
                  </button>
                </div>
                <p className={styles.mobileDates}>{exp.dates}</p>
              </div>
              {isOpen && (
                <div className={styles.mobileExpanded}>
                  <p className={styles.mobileTitle}>{exp.title}</p>
                  <p className={styles.mobileDescription}>{exp.description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
