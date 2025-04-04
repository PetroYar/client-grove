import { getData } from "@/app/common/libs/services";
import Paragraph from "../../paragraph/Paragraph";
import TitleH2 from "../../titleH2/TitleH2";
import Form from "./form/Form";
import styles from "./Reviews.module.scss";
import Slider from "./slider/Slider";

const fetchData = async (params) => {
  try {
    return await getData("/comment/published");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};

const Reviews = async (props) => {
  const data = await fetchData();

  return (
    <section className={styles.container}>
      <TitleH2>Наші клієнти</TitleH2>
      <Paragraph text={"Залиште свій коментар – нам важлива ваша думка! "} />
      <div className={styles.body}>
        <Form />
        <Slider data={data} />
      </div>
    </section>
  );
};

export default Reviews;
