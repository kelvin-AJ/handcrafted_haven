import styles from "./ui-components.module.css";
import Image from "next/image";


export default function ProductSample({ itemName, itemPrice, imgSrc }: { itemName: string; itemPrice: string; imgSrc: string }) {
    return (
        <div className={styles.productCard}>
            <Image
                aria-hidden
                src={imgSrc}
                alt={itemName}
                width={300}
                height={280}
            />
            <h4 className={styles.itemName}>{itemName}</h4>
            <span className={styles.itemPrice}>{itemPrice}</span>
            
        </div>
    );
}