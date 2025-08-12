import styles from "../../page.module.css";
import { IoStar } from "react-icons/io5";

type ArtisanReviewProps = {
    author: string;
  rating: number;
  comment: string;
  date: Date;
  key: number;
}

export default function ArtisanReview({ author, rating, comment, date} : ArtisanReviewProps) {
  console.log(date)

  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <h3>{author}</h3>
        <p className={styles.ratingStar}><IoStar /> {rating.toFixed(1)}</p>
      </div>
      <p className={styles.reviewText}>
        {comment}
      </p>
      <p className={styles.reviewDate}>{date.toLocaleDateString()}</p>
    </div>
  );
}