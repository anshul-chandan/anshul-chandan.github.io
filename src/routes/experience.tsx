import { useCallback, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import styles from './experience.module.css'
import { EXPERIENCES } from '../data/experiences'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { MobileAccordionEntry } from '../components/MobileAccordionEntry'

export const Route = createFileRoute('/experience')({
    component: ExperiencePage,
})

function ExperiencePage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null)

    const toggle = useCallback((idx: number) => {
        setOpenIdx((prev) => (prev === idx ? null : idx))
    }, [])

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
                    <ExperienceEntry key={exp.company} {...exp} />
                ))}
            </div>

            {/* Mobile: accordion */}
            <div className={styles.mobileEntries}>
                {EXPERIENCES.map((exp, idx) => (
                    <MobileAccordionEntry
                        key={exp.company}
                        {...exp}
                        isOpen={openIdx === idx}
                        onToggle={() => toggle(idx)}
                    />
                ))}
            </div>
        </div>
    )
}
