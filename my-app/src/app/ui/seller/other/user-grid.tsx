import styles from "../../../page.module.css";
import UserInfo from "./user-info";
import UserProductsList from "./user-products-list"
import { IUser } from "@/app/lib/model/userModel";

export default function UserGrid({ user } : { user: IUser | null}) {

  return (
    <div className={styles.page}>
      <UserInfo
        userId={user ? (user)._id?.toString() : ''}
        name={user?.name || ''}
        title={user?.title || ''}
        rating={user?.rating || 0}
        profileImage={user?.profileImage || ''}
        role={user?.role || 'user'}
        bio={user?.bio || ''}
        joinedDate={user?.dateJoined || new Date()}
 />
      <UserProductsList userId={user ? user._id?.toString() : ''}/>
    </div>
  );
}