"use client";
import { postData } from '@/app/common/libs/services';
import styles from './Form.module.scss';

import { useState } from "react";


const Form = () => {
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(e)
    try {
      const newComment = {
        description: review
      }
    const res = await postData(`/comment`,newComment);
      console.log(res)
      // setMessage(result.message);
    } catch (error) {
      setMessage("Помилка відправки!");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        name="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <button  type="submit">Залишити відгук</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
