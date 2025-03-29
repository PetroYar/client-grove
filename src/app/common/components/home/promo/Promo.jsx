import TitleH2 from "../../titleH2/TitleH2";

import styles from "./Promo.module.scss";

import { getData } from "@/app/common/libs/services";
import Slider from "./slider/Slider";

const fetchData = async () => {
  try {
    return await getData(`/products/category/specialni-propoziciyi`);
  } catch (error) {
    console.error(error);
  }
};

const Promo = async (props) => {
  const data = await fetchData();

  return (
    <div className={styles.container}>
      <TitleH2>Спеціальні пропозиції</TitleH2>
      <Slider data={data?.products}/>
    </div>
  );
};

export default Promo;
