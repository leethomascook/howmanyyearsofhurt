import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
    <p>Powered by</p>
        <a href="https://www.stadion.io"> <img src="/stadion-logo.svg" alt="Stadion" className={styles.logo} /></a>
      </footer>
    </>
  )
}
