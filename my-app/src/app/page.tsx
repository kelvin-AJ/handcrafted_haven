
import styles from "./page.module.css";
 import Link from "next/link";
//  import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      
   <nav className={styles.nav}>
    <ul className={styles.navLinks}>
    <li><Link href="/">Home</Link></li>
    <li><Link href="#about">About</Link></li>
    <li><Link href="#products">Products</Link></li>
    <li><Link href="#contact">Contact</Link></li>
    </ul>
   </nav>
      <main className={styles.main}>

        <div className={styles.heroPage}>

        <h1 className={styles.title}>Welcome to Artisan Touch</h1>
        <p className={styles.subtitle}>
          Handmade crafts with love, passion, and purpose.
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#shop"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className={styles.secondary}
          >
            Learn More
          </a>
        </div>
        </div>

        <div className={styles.article}>
            {/* <Image
            aria-hidden
            src="images/img.jpg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Artisan Touch. All rights reserved.</p>
      </footer>
    </div>
  );
}
