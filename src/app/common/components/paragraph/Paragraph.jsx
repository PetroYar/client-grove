import styles from "./Paragraph.module.scss";

const Paragraph = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
  
};

export default Paragraph;
