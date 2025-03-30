import Link from "next/link";
import TitleH2 from "../../titleH2/TitleH2";
import styles from "./Gallery.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Gallery = ({ data }) => {
  return (
    <div className={styles.container}>
      <TitleH2>галерея</TitleH2>
      <ul className={styles.gallery}>
        {data.map((item) => {
          return (
            <li key={item._id}>
              <Image
                src={item.image}
                alt="Gallery Image"
                width={700}
                height={1000}
                layout="responsive"
              />
            </li>
          );
        })}
      </ul>
      <Link href="/gallery">
        дивитись ще <FaArrowRight className={styles.arrow} />
      </Link>
    </div>
  );
};

export default Gallery;
