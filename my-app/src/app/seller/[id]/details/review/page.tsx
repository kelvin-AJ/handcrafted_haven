import SellerReviewForm from "@/app/ui/seller/seller-review-form";
import styles from "@/app/page.module.css";
 import Navbar from "@/app/ui/navbars";
 import Footer from "@/app/ui/footer";
import { Metadata } from 'next';
import { getUser } from '@/app/lib/actions';
 
export const metadata: Metadata = {
  title: 'Review Seller | HandCrafted Haven',
};
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const seller = await getUser((await props.params).id)
 
  return (
    <div className={styles.page}>
       <Navbar />
        <h1>Review {seller?.name || 'Seller'}</h1>
        <SellerReviewForm sellerId={seller?._id?.toString() || ''} />
      <Footer />
    </div>
  );
}