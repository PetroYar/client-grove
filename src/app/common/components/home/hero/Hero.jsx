import React from "react";
import styles from "./Hero.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
// import Image from "../../image/Image";
import Paragraph from "../../paragraph/Paragraph";
import Image from "next/image";

export default async function Hero({ data }) {
  const { title, description, image } = data.reduce(
    (acc, item) => {
      if (item.key === "hero-title") acc.title = item.value;
      if (item.key === "hero-description") acc.description = item.value;
      if (item.key === "hero-image") acc.image = item.image;
      return acc;
    },
    { title: "", description: "", image: null }
  );

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1>{title}</h1>
          <Paragraph text={description} />

          <Link href={"/menu"}>
            Меню <FaArrowRight className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.img}>
          <Image src={image} alt="" fill />
        </div>
      </div>
    </section>
  );
}
