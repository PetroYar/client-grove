
import TitleH2 from "../common/components/titleH2/TitleH2";
import styles from "./Gallery.module.scss";
import { getData } from "../common/libs/services";
import GalleryClient from "./GalleryClient";
const fetchData = async () => {
  try {
    return await getData("/content/page/gallery");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};
const GalleryPage = async (props) => {
  const data = await fetchData();
  

  return (
    <div className={styles.container}>
      <TitleH2>Галерея</TitleH2>
      <GalleryClient data={data}/>
    </div>
  );
};

export default GalleryPage;
