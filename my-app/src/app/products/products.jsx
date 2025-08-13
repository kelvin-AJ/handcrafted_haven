import styles from "../ui/ui-components.module.css";
import ProductSample from "../ui/product-sample";
import { getProducts } from "../lib/actions";
import Link from "next/link";

export default async function Products() {
  const allProducts = await getProducts();

  return (
    <div className={styles.productsContainer}>
      <div className={styles.product}>
        <h1>Products</h1>
        <p>Explore our range of handcrafted products.</p>
        {/* Add product listings here */}
      </div>

      <div className={styles.productImage}>
        {allProducts.map((product, i) => (
          <ProductSample
            key={product._id.toString()}
            itemName={product.title}
            itemDescription={product.description}
            itemPrice={product.price}
            imgSrc={product.imageURL}
          />
        ))}
      </div>
    </div>
  );
}
