import styles from "./ui-components.module.css";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";


export default function ProductSample({ itemName, itemPrice, imgSrc, itemDescription }: { itemName: string; itemPrice: number; imgSrc: string; itemDescription: string }) {
    return (
        <div className={styles.productCard}>
            <Image
                src={imgSrc}
                alt={itemName}
                width={250}
                height={240}
            />
            <h4 className={styles.itemName}>{itemName}</h4>
            <p className={styles.itemDescription}>
                {itemDescription}
            </p>
            <span className={styles.itemPrice}>${itemPrice}</span>
            <button className={styles.addToCart}>
                <IoIosCart />
                Add to Cart
            </button>
        </div>
    );
}