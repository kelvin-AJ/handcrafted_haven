import styles from "../../../page.module.css";
import Image from "next/image";
import { IoStar, IoAdd } from "react-icons/io5";
import ArtisanReview from "../artisan-review"; 
import { getFeedbacksforSeller} from "@/app/lib/actions";
import Link from 'next/link'

export default async function UserInfo({userId, name, rating, joinedDate, title, bio} : {userId : string, name : string, rating : number, joinedDate : Date, title : string, bio : string}) {
  const feedbacks = await getFeedbacksforSeller(userId);
  const dateJoined: string = joinedDate
    ? new Date(joinedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Unknown";
  
  return (
    <div>
      {/* Container for the heading and the new Edit button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Seller Profile</h1>
      </div>

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
              <h3>{name}</h3>
              <p className={styles.profileTitle}>{title}</p>
              <p>Joined <span>{dateJoined}</span></p>
              <p className={styles.ratingStar}><IoStar /> {rating} (Overall)</p>
            </div>
          </div>

          <div>
            <h3>About Me</h3>
            <p>
              {bio}
            </p>
          </div>
        </div>
        <div className={styles.sellerReviews}>
          <h3>Reviews</h3>
          <Link href={`/seller/${userId}/details/review`} className={styles.buttonPurple}>
            <IoAdd /> Add Review
          </Link>
          <div className={styles.reviewList}>
            {feedbacks.map((review, index) => (
              <ArtisanReview
                key={index * 1000}
                author={typeof review.author === "object" && "name" in review.author ? review.author.name : "Unknown"}
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
