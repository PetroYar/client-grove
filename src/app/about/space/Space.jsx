import TitleH2 from '@/app/common/components/titleH2/TitleH2';
import styles from './Space.module.scss';
import Paragraph from '@/app/common/components/paragraph/Paragraph';
import Image from 'next/image';
// import Image from '@/app/common/components/image/Image';

const Space = ({data}) => {
  const { title, paragraph1, paragraph2, image1, image2 } = data.reduce(
    (acc, item) => {
      if (item.key === "space-title") acc.title = item.value;
      if (item.key === "space-paragraph-1") acc.paragraph1 = item.value;
      if (item.key === "space-paragraph-2") acc.paragraph2 = item.value;
      if (item.key === "space-image-1") acc.image1 = item.image;
      if (item.key === "space-image-2") acc.image2 = item.image;

      return acc;
    },
    { title: "", paragraph1: "", paragraph2: "", image2: null, image2: null }
  );

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <TitleH2>{title}</TitleH2>
        <Paragraph text={paragraph1} />
        <Paragraph text={paragraph2} />
      </div>
      <div className={styles.images}>
        <div className={styles.mini}>
          <Image src={image1} alt="Cafe from the street" fill />
        </div>
        <div className={styles.mini}>
          <Image src={image2} alt="Cafe from the street" fill />
        </div>

        {/* <Image className={styles.mini} img={image1} />
        <Image className={styles.mini} img={image2} /> */}
      </div>
    </section>
  );
};

export default Space;