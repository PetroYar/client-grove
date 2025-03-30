import Link from "next/link";
import TitleH2 from "../../titleH2/TitleH2";
import styles from "./Menu.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { getData } from "@/app/common/libs/services";

const fetchData = async () => {
  try {
    return await getData(`/products/category/kava`);
  } catch (error) {
    console.error(error);
  }
};

const Menu = async () => {
  const data = await fetchData();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <TitleH2>гарячі напої</TitleH2>
        <Link href={"/menu/kava"}>
          Дивитись більше <FaArrowRight className={styles.arrow} />
        </Link>
      </div>
      <ul>
        {data?.products.map((item) => {
          return (
            <li key={item._id}>
              <div>
                <h6>{item.name}</h6>
                <hr />
                <p>{item.price}грн</p>
              </div>

              <span>{item.size}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
