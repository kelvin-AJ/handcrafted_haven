
import styles from "./page.module.css";
 import Image from "next/image";
 import ProductSample from "./ui/product-sample";
import Navbar from "../app/ui/navbars";
import Footer from "../app/ui/footer"

export default function Home() {
  return (
    <div className={styles.page}>

    <Navbar />

      <main className={styles.main}>

        <div className={styles.heroPage}>

        <h1 className={styles.title}>Welcome to Artisan Touch</h1>
        <p className={styles.subtitle}>
          Handmade crafts with love, passion, and purpose.
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#shop"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className={styles.secondary}
          >
            Learn More
          </a>
        </div>
        </div>

        <div className={styles.article}>

          <h2 className={styles.subh}>Own One-of-a-Kind, Handcrafted Masterpieces</h2>
            <ProductSample 
              itemName={"Native Woven Basket"}
              itemPrice={"$200"}
              imgSrc="/images/img.jpg"
              />
            <ProductSample 
              itemName={"Vintage Game Board"}
              itemPrice={"$20"}
              imgSrc="/images/img1.jpg"
              />
            <ProductSample 
              itemName={"Wall  Flowers"}
              itemPrice={"$10"}
              imgSrc="/images/img2.jpg"
              />
            <ProductSample 
              itemName={"Fine China Dishes"}
              itemPrice={"$520"}
              imgSrc="/images/img3.jpg"
              />
          </div>
          <div className={styles.sub}>

            <Image
            aria-hidden
            src="/images/img4.jpg"
            alt="File icon"
            width={300}
            height={300}
            />

            <p className={styles.para}>

            Discover the beauty of handcrafted items that tell a story. Each piece is unique, made with
            care and attention to detail. From home decor to personal accessories, find something special
            that resonates with you.
              Our artisans pour their heart and soul into every creation, ensuring that you receive not just a product,
            but a piece of art that carries the essence of craftsmanship. Join us in celebrating the art of handmade
            and support local artisans.
          </p>
          </div>

       
      </main>

      <Footer />

      
    </div>
  );
}