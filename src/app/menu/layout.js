import Link from "next/link";
import { getData } from "../common/libs/services";
import styles from "./menu.module.scss";

import ActiveLink from "../common/components/link/ActiveLink";

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
        {data.map((item) => (
          <li className={styles.category} key={item._id}>
            <ActiveLink
              href={`/menu/${item.slug}`}
              className={styles.link}
              activeClassName={styles.active}
            >
              {item.name}
            </ActiveLink>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default MenuLayout;
