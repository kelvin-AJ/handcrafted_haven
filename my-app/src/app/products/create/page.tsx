import Form from '@/app/ui/products/create-form/page';
import styles from "../../page.module.css";
 import Navbar from "../../ui/navbars";
 import Footer from "../../ui/footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Create Product | HandCrafted Haven',
};
 
export default async function Page() {
 
  return (
    <div className={styles.page}>
       <Navbar />
        <Form />
      <Footer />
    </div>
  );
}