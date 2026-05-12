import { createFileRoute, Link } from '@tanstack/react-router'
import styles from './home.module.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.name}>ANSHUL CHANDAN</h1>
        <p className={styles.subtitle}>
          software engineer professional - photography hobbyist - nyc based
        </p>
      </div>
      <div className={styles.navArea}>
        <nav className={styles.nav}>
          <Link to="/experience" className={styles.navLink}>
            Experience
          </Link>
          <a
            href="https://instagram.com/anshul.chandan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            Photography
          </a>
          <a
            href="https://linkedin.com/in/anshul-chandan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anshul-chandan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            GitHub
          </a>
        </nav>
      </div>
    </div>
  )
}
