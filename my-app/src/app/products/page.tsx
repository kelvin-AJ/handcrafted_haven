
import styles from "../page.module.css";
 import Navbar from "../ui/navbars";
 import Footer from "../ui/footer";
 import Production from "../products/products"

export default function products() {
  return (
    <div className={styles.page}>

    <Navbar />

    <Production />

    <Footer />
    </div>
  );
}
