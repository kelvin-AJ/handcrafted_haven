import styles from "../ui/ui-components.module.css";
import Image from "next/image";

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.product}>
        <h1>Products</h1>
        <p>Explore our range of handcrafted products.</p>
        {/* Add product listings here */}
      </div>

      <div className={styles.productImage}>

        <div>
          <Image src="/images/fib.jpg" alt="fibre store" width={250} height={200} />
          <h3>Woven Fibre Art</h3>
          <p>Textured wall pieces handcrafted from natural fibres.</p>
          <button className={styles.addToCart}>
                          {/* <IoIosCart /> */}
                          <a href='/seller'> checkout </a>
                      </button>
        </div>

        <div>
          <Image src="/images/pots.jpg" alt="Pots" width={250} height={200}  />
          <h3>Clay Pot Set</h3>
          <p>Rustic, handmade pots for home and garden.</p>
          <button className={styles.addToCart}>
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/pot.jpg" alt="Pot"width={250} height={200}  />
          <h3>Single Pot</h3>
          <p>Earthy-toned ceramic with a unique glaze.</p>
          <button className={styles.addToCart}>
                {/* <IoIosCart /> */}
                <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/handdrawing.jpg" alt="Hand drawing"width={250} height={200}  />
          <h3>Botanical Drawing</h3>
          <p>Fine line drawing inspired by nature.</p>
          <button className={styles.addToCart}>
                {/* <IoIosCart /> */}
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/handdrawing2.jpg" alt="Hand drawing 2"width={250} height={200}  />
          <h3>Floral Sketch</h3>
          <p>Minimalist art with organic detail.</p>
          <button className={styles.addToCart}>
                
                <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/handdrawing3.jpg" alt="Hand drawing 3"width={250} height={200}  />
          <h3>Nature-Inspired Art</h3>
          <p>One-of-a-kind ink illustrations.</p>
          <button className={styles.addToCart}>
               
                <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/cups.jpg" alt="Cups" width={250} height={200}  />
          <h3>Handmade Cups</h3>
          <p>Everyday ceramics with a handcrafted charm.</p>
          <button className={styles.addToCart}>
              <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/cup2.jpg" alt="Cup 2"width={250} height={200}  />
          <h3>Stoneware Mug</h3>
          <p>Warm colors and natural textures for cozy sipping.</p>
          <button className={styles.addToCart}>
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/cup3.jpg" alt="Cup 3"width={250} height={200}  />
          <h3>Classic Teacup</h3>
          <p>Elegant shape with rustic finish.</p>
          <button className={styles.addToCart}>
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/work.jpg" alt="Work in progress"width={250} height={200}  />
          <h3>Studio Work</h3>
          <p>Captured moments from our creative process.</p>
          <button className={styles.addToCart}>
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/xmas.jpg" alt="Xmas product" width={250} height={200}  />
          <h3>Holiday Decor</h3>
          <p>Seasonal crafts to bring warmth to your home.</p>
          <button className={styles.addToCart}>
               <a href='/seller'> checkout </a>
            </button>
        </div>

        <div>
          <Image src="/images/radio.jpg" alt="Radio" width={250} height={200}  />
          <h3>Vintage Radio</h3>
          <p>Decorative retro-style piece for collectors.</p>
          <button className={styles.addToCart}>
              <a href='/seller'> checkout </a>
            </button>
        </div>

      </div>
    </div>
  );
}
