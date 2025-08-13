"use client"

import { useActionState } from 'react';
import styles from '@/app/ui/ui-components.module.css';
import { createFeedback } from '@/app/lib/actions';
import { ReviewState } from '@/app/lib/definitions';



export default function SellerReviewForm({sellerId} : {sellerId: string}) {

  const initialState: ReviewState = { message: "", errors: {
    comment : "",
    rating : ""
  } }
  const [state, formAction] = useActionState(createFeedback, initialState)


  return (
   <form className={styles.form} action={formAction}>
  <div className={styles.group}>
    <label htmlFor="comment">Comment</label>
    <textarea 
      id="comment" 
      name="comment" 
      placeholder="Enter comment"
    ></textarea>
    {state.errors?.comment && (
    <p style={{ color: 'red' }}>{state.errors.comment}</p>
  )}
  </div>
  <div className={styles.group}>
    <label htmlFor="rating">Rating: </label>
    <input 
      type="number"
      min="1"
      max="5" 
      step={"0.5"}
      id="rating" 
      name="rating" 
    />
    {state.errors?.rating && (
    <p style={{ color: 'red' }}>{state.errors.rating}</p>
  )}
  </div>
  <div className={styles.group}>
    <label htmlFor='sellerId'></label>
    <input type="hidden" id='sellerId' name="sellerId" value={sellerId ?? ""} />
  </div>
  
  <button type="submit" className={styles.submitButton}>Submit</button>
</form>
  );
}