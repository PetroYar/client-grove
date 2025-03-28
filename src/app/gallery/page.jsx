import Image from "next/image";
import TitleH2 from "../common/components/titleH2/TitleH2";
import styles from "./Gallery.module.scss";
import { getData } from "../common/libs/services";
const fetchData = async () => {
  try {
    return await getData("/content/page/gallery");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};
const GalleryPage = async (props) => {
  const data = await fetchData();

  return <div className={styles.container}>
  <TitleH2>Галерея</TitleH2>
<ul className={styles.gallery}>
  {data?.map(item=>{
    return (
      <li key={item._id}>
        <Image
          src={item.image}
          alt="Gallery Image"
          width={300}
          height={500}
          layout="intrinsic"
        />
      </li>
    );
  })}
</ul>


  </div>;
};

export default GalleryPage;
