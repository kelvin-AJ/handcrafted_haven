"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.hambuger} onClick={toggleMenu}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/seller">My Profile</Link>
          </li>
          <li>
            <Link href="/products">All Products</Link>
          </li>
          <li>
            <Link href="/contact">Logout</Link>
          </li>
          <li>
            <Link href="/signin">Get Started</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
