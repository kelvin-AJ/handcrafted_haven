import styles from "../../page.module.css";
import { IoStar } from "react-icons/io5";

type ArtisanRevieProps = {
    name: string;
  rating: string;
  text: string;
  date: string;
}

export default function ArtisanReview({ name , rating, text, date } : ArtisanRevieProps) {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <h3>{name}</h3>
        <p className={styles.ratingStar}><IoStar /> {rating}</p>
      </div>
      <p className={styles.reviewText}>
        {text}
      </p>
      <p className={styles.reviewDate}>{date}</p>
    </div>
  );
}