import Link from "next/link";
import { getData } from "../common/libs/services";
import styles from "./menu.module.scss";

const fetchData = async () => {
  try {
    return await getData("/category");
  } catch (error) {
    console.error(error);
  }
};

const MenuLayout = async ({ children }) => {
  const data = await fetchData();

  return (
    <div className={styles.container}>
      <h1>меню</h1>
      <ul className={styles.list}>
        {data.map((item) => {
          return (
            <li key={item._id}>
              <Link href={`/menu/${item.slug}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default MenuLayout;
