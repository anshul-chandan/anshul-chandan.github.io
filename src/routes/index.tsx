import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import styles from './home.module.css'

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    useEffect(() => { document.title = 'Anshul Chandan' }, [])
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.name}>ANSHUL CHANDAN</h1>
                <h1 className={styles.mobileName}>ANSHUL<br />CHANDAN</h1>
                <p className={styles.subtitle}>
                    software engineer professional - photography hobbyist - nyc based
                </p>
                <p className={styles.mobileSubtitle}>
                    software engineer professional
                </p>
                <p className={styles.mobileSubtitle}>
                    photography hobbyist
                </p>
                <p className={styles.mobileSubtitle}>
                    nyc based
                </p>
            </header>
            <main id="main-content" className={styles.navArea}>
                <nav className={styles.nav}>
                    <Link to="/experience" className={styles.navLink}>
                        Experience
                    </Link>
                    <a
                        href="https://instagram.com/anshulchandan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navLink}
                    >
                        Photography<span className="sr-only"> (opens in new tab)</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/anshulchandan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navLink}
                    >
                        LinkedIn<span className="sr-only"> (opens in new tab)</span>
                    </a>
                    <a
                        href="https://github.com/anshul-chandan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navLink}
                    >
                        GitHub<span className="sr-only"> (opens in new tab)</span>
                    </a>
                </nav>
            </main>
        </div>
    )
}
