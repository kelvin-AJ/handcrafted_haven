import styles from "../../page.module.css";
import SellerInfo from "./seller-info";
import SellerProductsList from "./seller-products-list";

export default function SellerGrid() {
  return (
    <div className={styles.page}>
      <SellerInfo />
      <SellerProductsList />
      
      {/* Artisans products grid: Header, product count, add product button) */}
    </div>
  );
}