import styles from "../../page.module.css";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import ArtisanReview from "./artisan-review"; 
import { getFeedbacksforSeller} from "@/app/lib/actions";

export default async function SellerInfo({sellerId} : {sellerId: string}) {
  const feedbacks = await getFeedbacksforSeller(sellerId);
  console.log(feedbacks)


  
  return (
    <div>
      <h1>Your Profile</h1>
      <div className={styles.myProfileGrid}>
        <div className={styles.profileMainGrid}>
          <div className={styles.profileCard}>
            <div>
    <Image
              className={styles.profileImage}
              src="/images/profile-img.jpg"
              alt="Portrait of Seller"
              height={200}
              width={200}
            />
            </div>
            <div>
    <h3>Nephi Asha</h3>
            <p className={styles.profileTitle}>Pottery Expert</p>
            <p>Joined <span>Jan 5, 2025</span></p>
            <p className={styles.ratingStar}><IoStar /> 4.8 (Overall)</p>
            </div>
            
          </div>

          <div>
            <h3>About Me</h3>
            <p>
              Hello! I am Nephi, a passionate potter with over 15 years of experience shaping clay into beautiful and functional art. My journey began in a small community studio, where I fell in love with the wheel.
            </p>
          </div>
        </div>
        <div className={styles.sellerReviews}>
          <h3>Reviews</h3>
          <div className={styles.reviewList}>
            {feedbacks.map((review, index) => (
              <ArtisanReview
                key={index * 1000}
                author={review.author.name}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}