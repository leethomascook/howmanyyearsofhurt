import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://www.stadion.io">Powered by <img src="/stadion-logo.svg" alt="Stadion" className={styles.logo} /></a>
      </footer>
    </>
  )
}
