import { memo } from 'react'
import styles from './MobileAccordionEntry.module.css'

interface Props {
    company: string
    dates: string
    title: string
    description: string
    isOpen: boolean
    onToggle: () => void
}

export const MobileAccordionEntry = memo(function MobileAccordionEntry({
    company,
    dates,
    title,
    description,
    isOpen,
    onToggle,
}: Props) {
    return (
        <div className={styles.mobileEntry}>
            <div className={[styles.mobileTop, isOpen && styles.open].filter(Boolean).join(' ')}>
                <div className={styles.mobileTopRow}>
                    <p className={styles.mobileCompany}>{company}</p>
                    <button
                        className={styles.mobileToggle}
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${company}`}
                    >
                        {isOpen ? '[-]' : '[+]'}
                    </button>
                </div>
                <p className={styles.mobileDates}>{dates}</p>
            </div>
            {isOpen && (
                <div className={styles.mobileExpanded}>
                    <p className={styles.mobileTitle}>{title}</p>
                    <p className={styles.mobileDescription}>{description}</p>
                </div>
            )}
        </div>
    )
})
