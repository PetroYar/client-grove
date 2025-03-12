import { getData } from "../common/libs/services";
import styles from "./About.module.scss";
import History from "./history/History";
import Space from "./space/Space";

const fetchData = async () => {
  try {
    return await getData("/content/page/about");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};

const AboutPage = async (props) => {
  const data = await fetchData();

  const groupedData = data.reduce(
    (acc, item) => {
      if (item.key.includes("history")) {
        acc.history.push(item);
      } else if (item.key.includes("space")) {
        acc.space.push(item);
      }
      return acc;
    },
    { history: [], space: [] }
  );

  return (
    <div className={styles.container}>
      <History data={groupedData.history} />
      <Space data={groupedData.space} />
    </div>
  );
};

export default AboutPage;
