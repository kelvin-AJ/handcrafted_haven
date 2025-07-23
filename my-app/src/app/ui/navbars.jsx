// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Seller</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
