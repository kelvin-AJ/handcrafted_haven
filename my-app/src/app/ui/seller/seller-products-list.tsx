import Link from "next/link";
import styles from "../../page.module.css";
import ProductSample from "../product-sample";
import { RiApps2AddFill } from "react-icons/ri";
import { getProductsBySeller } from "../../lib/actions";

export default async function SellerProductsList({ sellerId } : {sellerId: string}) {
    const sellerProducts = await getProductsBySeller(sellerId);
    // console.log(sellerPoducts)

     return (
    <div className={styles.sellerProductsList}>
        <div className={styles.productHeader}>
            {/* Products header bar */}
            
            <h2>Products</h2>
            <p className={styles.productCount}><span>{sellerProducts.length}</span> Products</p>
            <div>
                <Link href="/products/create" className={styles.buttonPurple}>
                    <RiApps2AddFill /> Add Product
                </Link>
            </div>
        </div>
        <div className={styles.productListing}>
            {/* Products listing */}

            {
            sellerProducts.map((product, i) => {
                return (
                  <ProductSample
                    key={product._id.toString()}
                    itemDescription={product.description}
                    itemName={product.title}
                    itemPrice={product.price}
                    imgSrc={product.imageURL}
                    />
                )
              })
            }
        </div>
      
    </div>
  );
}