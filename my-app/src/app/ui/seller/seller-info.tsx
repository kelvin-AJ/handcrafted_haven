import styles from "../../page.module.css";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import ArtisanReview from "./artisan-review"; 
export default function SellerInfo() {
  const reviews = [
    {
      name: "Chiamaka Okoro",
      rating: "5.0",
      text: "Absolutely stunning craftsmanship! The vase I bought is even more beautiful in person. Nephi's attention to detail is incredible. The packaging was also very secure. Will definitely buy again!",
      date: "July 15, 2025",
    },
    {
      name: "Tunde Adebayo",
      rating: "4.0",
      text: "Great quality mug. It feels sturdy and has a unique glaze. Shipping took a little longer than expected, but the product itself is fantastic. Worth the wait.",
      date: "June 28, 2025",
    },
    {
      name: "Fatima Sani",
      rating: "5.0",
      text: "I commissioned a custom dinnerware set and Nephi brought my vision to life perfectly. Communication was excellent throughout the process. I'm so thrilled with the result. Highly recommended for custom pottery work.",
      date: "May 10, 2025",
    },
  ];

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
            {reviews.map((review, index) => (
              <ArtisanReview
                key={index}
                name={review.name}
                rating={review.rating}
                text={review.text}
                date={review.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}