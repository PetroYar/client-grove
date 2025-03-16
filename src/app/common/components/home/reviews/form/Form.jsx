import styles from './Form.module.scss';

const Form = (props) => {
  return (
    <form className={styles.container}>
      <textarea name="review"></textarea>
      <button>Залишити відгук</button>
    </form>
  );
};

export default Form;