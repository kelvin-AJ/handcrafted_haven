import styles from "../../page.module.css";
import SellerInfo from "./seller-info";
import SellerProductsList from "./seller-products-list";

export default function SellerGrid() {
  return (
    <div className={styles.page}>
      <SellerInfo sellerId="6894d3ba7296e21556cd2974"/>
      <SellerProductsList sellerId="6894d3ba7296e21556cd2974"/>
    </div>
  );
}