import styles from "../../page.module.css";
 import Navbar from "../../ui/navbars";
 import Footer from "../../ui/footer";
 import CardDemo from "../../ui/forms/signin"

export default function products() {
  return (
    <div className={styles.page}>

    <Navbar />

    <CardDemo />

    <Footer />
    </div>
  );
}