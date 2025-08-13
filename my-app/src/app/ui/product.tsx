import styles from "./ui-components.module.css";
import Image from "next/image";
import { IoIosCart } from "react-icons/io";
import Link from "next/link";



export default function Product({ itemName, itemPrice, imgSrc, itemDescription, sellerId }: { itemName: string; itemPrice: number; imgSrc: string; itemDescription: string, sellerId:  string}) {
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
            <Link href={`/seller/${sellerId}/details`} className={styles.addToCart}>
                <IoIosCart />
                View Seller
            </Link>
        </div>
    );
}