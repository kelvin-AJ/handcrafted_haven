import styles from "../../../page.module.css";
import ProductSample from "../../product-sample";
import { getProductsBySeller } from "../../../lib/actions";

export default async function UserProductsList({userId} : {userId : string}) {
    const sellerProducts = await getProductsBySeller(userId);

     return (
    <div className={styles.sellerProductsList}>
        <div className={styles.productHeader}>
            
            <h2>Products</h2>
            <p className={styles.productCount}><span>{sellerProducts.length}</span> Products</p>
        </div>
        <div className={styles.productListing}>

            {
            sellerProducts.map((product) => {
                return (
                  <ProductSample
                    key={product._id.toString()}
                    itemDescription="Sample Description"
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