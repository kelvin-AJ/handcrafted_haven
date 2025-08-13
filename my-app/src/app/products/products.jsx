import styles from "../ui/ui-components.module.css";
import Product from "../ui/product";
import { getProducts } from "../lib/actions";

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
        {allProducts.map((product) => (
          <Product
            key={product._id.toString()}
            itemName={product.title}
            itemDescription={product.description}
            itemPrice={product.price}
            imgSrc={product.imageURL}
            sellerId={product.seller?._id}
          />
        ))}
      </div>
    </div>
  );
}
