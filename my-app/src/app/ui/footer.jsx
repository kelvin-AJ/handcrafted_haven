import styles from "../page.module.css";
export default function Footer() {
  return (  
<footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Artisan Touch. All rights reserved.</p>
      </footer>
  )
}