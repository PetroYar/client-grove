import Link from "next/link";
import TitleH2 from "../../titleH2/TitleH2";
import styles from "./Gallery.module.scss";
import { FaArrowRight } from "react-icons/fa";

const Gallery = ({ data }) => {
  return (
    <div className={styles.container}>
      <TitleH2>галерея</TitleH2>
      <div className={styles.gallery}>
        {data.map((item) => {
          return <img key={item._id} src={item.image} alt="" />;
        })}
      </div>
      <Link href='/gallery'>дивитись ще <FaArrowRight className={styles.arrow}/></Link>
      
    </div>
  );
};

export default Gallery;
