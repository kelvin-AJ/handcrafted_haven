
import styles from "./page.module.css";
 import Link from "next/link";
 import Image from "next/image";

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

          {/* <h2 className="sub">Own One-of-a-Kind, Handcrafted Masterpieces</h2> */}
            <Image
            aria-hidden
            src="/images/img.jpg"
            alt="File icon"
            width={170}
            height={160}
          />

           <Image
            aria-hidden
            src="/images/img3.jpg"
            alt="File icon"
            width={170}
            height={160}
          />

           <Image
            aria-hidden
            src="/images/img1.jpg"
            alt="File icon"
            width={170}
            height={160}
          />

           <Image
            aria-hidden
            src="/images/img2.jpg"
            alt="File icon"
            width={170}
            height={160}
          />
          </div>
          <p className={styles.sub}>
            Discover the beauty of handcrafted items that tell a story. Each piece is unique, made with
            care and attention to detail. From home decor to personal accessories, find something special
            that resonates with you.
              Our artisans pour their heart and soul into every creation, ensuring that you receive not just a product,
            but a piece of art that carries the essence of craftsmanship. Join us in celebrating the art of handmade
            and support local artisans.
          </p>

       
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Artisan Touch. All rights reserved.</p>
      </footer>
    </div>
  );
}
