import { memo } from 'react'
import styles from './ExperienceEntry.module.css'

interface Props {
    company: string
    dates: string
    title: string
    description: string
}

export const ExperienceEntry = memo(function ExperienceEntry({ company, dates, title, description }: Props) {
    return (
        <div className={styles.entry}>
            <div className={styles.entryLeft}>
                <p className={styles.company}>{company}</p>
                <p className={styles.dates}>{dates}</p>
            </div>
            <div className={styles.entryRight}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
})
