import styles from "../../page.module.css";
 import Navbar from "../../ui/navbars";
 import Footer from "../../ui/footer";
 import SignupForm from "../../ui/forms/signup"

export default function products() {
  return (
    <div className={styles.page}>

    <Navbar />

    <SignupForm />

    <Footer />
    </div>
  );
}