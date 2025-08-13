import styles from "../../page.module.css";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import ArtisanReview from "./artisan-review"; 
import { getFeedbacksforSeller, getLoggedInUser} from "@/app/lib/actions";
import { RiEditFill } from "react-icons/ri";
import Link from 'next/link'

export default async function SellerInfo() {
  const feedbacks = await getFeedbacksforSeller();
  const loggedinUser = await getLoggedInUser();

  const dateJoined: string = loggedinUser?.dateJoined
    ? new Date(loggedinUser.dateJoined).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Unknown";
  
  return (
    <div>
      {/* Container for the heading and the new Edit button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Your Profile</h1>
        <Link href="/seller/edit" className={styles.editProfileButton}>
          <RiEditFill />
          Edit Profile</Link>
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
              <h3>{loggedinUser?.name}</h3>
              <p className={styles.profileTitle}>{loggedinUser?.title}</p>
              <p>Joined <span>{dateJoined}</span></p>
              <p className={styles.ratingStar}><IoStar /> {loggedinUser?.rating} (Overall)</p>
            </div>
          </div>

          <div>
            <h3>About Me</h3>
            <p>
              {loggedinUser?.bio}
            </p>
          </div>
        </div>
        <div className={styles.sellerReviews}>
          <h3>Reviews</h3>
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
