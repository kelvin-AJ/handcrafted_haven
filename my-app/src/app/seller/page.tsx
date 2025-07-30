
import styles from "../page.module.css";
 import Navbar from "../ui/navbars";
 import Footer from "../ui/footer";
 import SellerGrid from "../ui/seller/seller-grid";

export default function products() {
  return (
    <div className={styles.page}>

    <Navbar />
    <SellerGrid />
    <Footer />
    </div>
  );
}
