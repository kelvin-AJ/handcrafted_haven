import styles from "../../page.module.css";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function SellerInfo() {
     return (
    <div className={styles.myProfile}>
      <h1>Your Profile</h1>
      <div className={styles.myProfileGrid}>
        <div className={styles.profileMainGrid}>
            <div>
                <Image
                    className={styles.profileImage}
                    src="/images/profile-img.jpg"
                    alt="Potrait of Seller"
                    height={250}
                    width={250}
                    />
            </div>
            <div>
                <h2>Nephi Asha</h2>
                <p>Pottery Expert</p>
                <p>Joined <span>5, Jan 2025</span></p>
                <p className={styles.ratingStar}><IoStar />  4.8</p>

            </div>
        </div>
        <div className={styles.sellerStory}>
            <h2>Reviews</h2>
            <p>
                in Progress
            </p>
        </div>
      </div>
     
      
    </div>
  );
}