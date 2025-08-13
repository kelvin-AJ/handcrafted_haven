
import styles from "../../../page.module.css";
 import Navbar from "../../../ui/navbars";
 import Footer from "../../../ui/footer";
 import UserGrid from "../../../ui/seller/other/user-grid";
 import { getUser } from "@/app/lib/actions";

export default async function products(props: { params: Promise<{ id: string }> }) {
    const seller = await getUser((await props.params).id)
  return (
    <div className={styles.page}>

    <Navbar />
    <UserGrid user={seller}/>
    <Footer />
    </div>
  );
}
