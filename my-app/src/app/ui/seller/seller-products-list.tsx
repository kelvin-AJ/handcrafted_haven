import Link from "next/link";
import styles from "../../page.module.css";
import ProductSample from "../product-sample";
import { RiApps2AddFill } from "react-icons/ri";



const products = [
  {
    itemName: "Native Woven Basket",
    itemPrice: "$200",
    imgSrc: "/images/img.jpg"
  },
  {
    itemName: "Vintage Game Board",
    itemPrice: "$20",
    imgSrc: "/images/img1.jpg"
  },
  {
    itemName: "Wall Flowers",
    itemPrice: "$10",
    imgSrc: "/images/img2.jpg"
  },
  {
    itemName: "Fine China Dishes",
    itemPrice: "$520",
    imgSrc: "/images/img3.jpg"
  },
  {
    itemName: "Native Woven Basket",
    itemPrice: "$200",
    imgSrc: "/images/img.jpg"
  },
  {
    itemName: "Vintage Game Board",
    itemPrice: "$20",
    imgSrc: "/images/img1.jpg"
  },
  {
    itemName: "Wall Flowers",
    itemPrice: "$10",
    imgSrc: "/images/img2.jpg"
  },
  {
    itemName: "Fine China Dishes",
    itemPrice: "$520",
    imgSrc: "/images/img3.jpg"
  }
];


export default function SellerProductsList() {
     return (
    <div className={styles.sellerProductsList}>
        <div className={styles.productHeader}>
            {/* Products header bar */}
            
            <h2>Products</h2>
            <p className={styles.productCount}><span>4</span> Products</p>
            <div>
                <Link href="/products/create"><button className={styles.buttonPurple}><RiApps2AddFill /> Add Product</button></Link>
            </div>
        </div>
        <div className={styles.productListing}>
            {/* Products listing */}

            {
              products.map((product, i) => {
                return (
                  <ProductSample 
                    key={i * Date.now()}
                    itemName={product.itemName}
                    itemPrice={product.itemPrice}
                    imgSrc={product.imgSrc}
                    />
                )
              })
            }
        </div>
      
    </div>
  );
}