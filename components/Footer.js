import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/stadion-logo.svg" alt="Stadion Logo" className={styles.logo} />
      </footer>
    </>
  )
}
