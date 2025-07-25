import styles from "../../page.module.css";
import ProductSample from "../product-sample";
import { RiApps2AddFill } from "react-icons/ri";

export default function SellerProductsList() {
     return (
    <div>
        <div className={styles.productHeader}>
            {/* Products header bar */}
            
            <h2>Products</h2>
            <p className={styles.productCount}><span>4</span> Products</p>
            <div>
                <button className={styles.buttonPurple}><RiApps2AddFill /> Add Product</button>
            </div>
        </div>
        <div className={styles.productListing}>
            {/* Products listing */}
            <ProductSample 
              itemName={"Native Woven Basket"}
              itemPrice={"$200"}
              imgSrc="/images/img.jpg"
              />
            <ProductSample 
              itemName={"Vintage Game Board"}
              itemPrice={"$20"}
              imgSrc="/images/img1.jpg"
              />
            <ProductSample 
              itemName={"Wall  Flowers"}
              itemPrice={"$10"}
              imgSrc="/images/img2.jpg"
              />
            <ProductSample 
              itemName={"Fine China Dishes"}
              itemPrice={"$520"}
              imgSrc="/images/img3.jpg"
              />
        </div>
      
    </div>
  );
}