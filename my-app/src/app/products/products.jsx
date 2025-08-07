import styles from "../ui/ui-components.module.css";
import Image from "next/image";
import { getProducts } from "../lib/actions";
import { ObjectId } from "mongodb";

export default async function Products() {
  const allProducts = await getProducts();
  // const allUsers = await getAllUsers();

  return (
    <div className={styles.productsContainer}>
      <div className={styles.product}>
        <h1>Products</h1>
        <p>Explore our range of handcrafted products.</p>
        {/* Add product listings here */}
      </div>

      <div className={styles.productImage}>
        {allProducts.map((product, index) => (
          <div key={index}>
            <Image
              src={product.imageURL}
              alt={product.title}
              width={250}
              height={200}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className={styles.addToCart}>
              <a href="/seller">checkout</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
