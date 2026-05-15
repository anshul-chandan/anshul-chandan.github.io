import { useCallback, useState, useEffect } from 'react'
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
    const [liveMessage, setLiveMessage] = useState('')

    useEffect(() => { document.title = 'Experience — Anshul Chandan' }, [])

    const toggle = useCallback((idx: number, company: string) => {
        setOpenIdx((prev) => {
            const isOpening = prev !== idx
            setLiveMessage(`${company} ${isOpening ? 'expanded' : 'collapsed'}`)
            return isOpening ? idx : null
        })
    }, [])

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.heading}>EXPERIENCE</h1>
                <Link to="/" className={styles.homeLink}>
                    [home]
                </Link>
            </header>

            <main id="main-content">
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
                            onToggle={() => toggle(idx, exp.company)}
                        />
                    ))}
                </div>

                <div aria-live="polite" className="sr-only">{liveMessage}</div>
            </main>
        </div>
    )
}
