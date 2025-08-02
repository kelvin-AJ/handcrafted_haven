import styles from '../../ui-components.module.css';

export default function Form() {
  return (
   <form className={styles.form}>
  <div className={styles.group}>
    <label htmlFor="productName">Product Name</label>
    <input 
      type="text" 
      id="productName" 
      name="productName" 
      placeholder="Enter product name" 
    />
  </div>
  <div className={styles.group}>
    <label htmlFor="productPrice">Price</label>
    <input 
      type="number" 
      id="productPrice" 
      name="productPrice" 
      placeholder="Enter price" 
    />
  </div>
  <div className={styles.group}>
    <label htmlFor="productDescription">Description</label>
    <textarea 
      id="productDescription" 
      name="productDescription" 
      placeholder="Enter product description"
    ></textarea>
  </div>
  <div className={styles.group}>
    <label htmlFor="productImage">Product Image</label>
    <input 
      type="file" 
      id="productImage" 
      name="productImage" 
    />
  </div>
  <button type="submit" className={styles.submitButton}>Submit</button>
</form>
  );
}