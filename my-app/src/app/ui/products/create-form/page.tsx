"use client"

import { useActionState } from 'react';
import styles from '../../ui-components.module.css';
import { createProduct } from '@/app/lib/actions';
import { State } from '@/app/lib/definitions';



export default function Form() {

  const initialState: State = { message: "", errors: {
    title: "",
    price: "",
    description: "",
    imageURL: ""
  } }
  const [state, formAction] = useActionState(createProduct, initialState)


  return (
   <form className={styles.form} action={formAction}>
  <div className={styles.group}>
    <label htmlFor="title">Product Name</label>
    <input 
      type="text" 
      id="title" 
      name="title" 
      placeholder="Enter product name" 
    />
    {state.errors?.title && (
    <p style={{ color: 'red' }}>{state.errors.title}</p>
  )}
  </div>
  <div className={styles.group}>
    <label htmlFor="price">Price</label>
    <input 
      type="number" 
      id="price" 
      name="price" 
      placeholder="Enter price" 
    />
    {state.errors?.price && (
    <p style={{ color: 'red' }}>{state.errors.price}</p>
  )}
  </div>
  <div className={styles.group}>
    <label htmlFor="description">Description</label>
    <textarea 
      id="description" 
      name="description" 
      placeholder="Enter product description"
    ></textarea>
    {state.errors?.description && (
    <p style={{ color: 'red' }}>{state.errors.description}</p>
  )}
  </div>
  <div className={styles.group}>
    <label htmlFor="imageURL">Product Image</label>
    <input 
      type="url" 
      id="imageURL" 
      name="imageURL" 
    />
    {state.errors?.imageURL && (
    <p style={{ color: 'red' }}>{state.errors.imageURL}</p>
  )}
  </div>
  <button type="submit" className={styles.submitButton}>Submit</button>
</form>
  );
}