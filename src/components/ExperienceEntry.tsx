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
        <article className={styles.entry}>
            <div className={styles.entryLeft}>
                <h2 className={styles.company}>{company}</h2>
                <p className={styles.dates}>{dates}</p>
            </div>
            <div className={styles.entryRight}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    )
})
