import { getLoggedInUser } from '@/app/lib/actions';
import EditProfileForm from '@/app/ui/seller/edit-profile-form';
import styles from "../../page.module.css";
import Navbar from "../../ui/navbars";
import Footer from "../../ui/footer";
import { notFound } from 'next/navigation';

export default async function EditSellerProfilePage() {
  const loggeduser = await getLoggedInUser();

  if (!loggeduser) {
    notFound();
  }
  
  const user = Object.assign(loggeduser, {})


  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.mainContent}>
        <h1 className={styles.formTitle}>Edit Your Profile</h1>
        <EditProfileForm user={user} />
      </div>
      <Footer />
    </div>
  );
}
