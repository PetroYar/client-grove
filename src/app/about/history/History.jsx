
import styles from "./History.module.scss";
import TitleH2 from "@/app/common/components/titleH2/TitleH2";
import Paragraph from "@/app/common/components/paragraph/Paragraph";
import Image from "next/image";

const History = ({ data }) => {
  const { title, paragraph1, paragraph2, image } = data.reduce(
    (acc, item) => {
      if (item.key === "history-title") acc.title = item.value;
      if (item.key === "history-paragraph-1") acc.paragraph1 = item.value;
      if (item.key === "history-paragraph-2") acc.paragraph2 = item.value;
      if (item.key === "history-image") acc.image = item.image;
      return acc;
    },
    { title: "", paragraph1: "", paragraph2: "", image: null }
  );

  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image src={image} alt="" fill sizes="100%" />
      </div>

      <div className={styles.content}>
        <TitleH2>{title}</TitleH2>

        <Paragraph text={paragraph1} />
        <Paragraph text={paragraph2} />
      </div>
    </section>
  );
};

export default History;
