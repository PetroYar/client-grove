import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { getData } from "../../libs/services";

const fetchData = async () => {
  try {
    return await getData("/content/page/footer");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};
const Footer = async (props) => {
  const data = await fetchData();

  const { number, email, addres, facebook, instagram } = data?.reduce(
    (acc, item) => {
      if (item.key === "contact-number") acc.number = item.value;
      if (item.key === "contact-addres") acc.addres = item.value;
      if (item.key === "contact-email") acc.email = item.value;
      if (item.key === "contact-facebook") acc.facebook = item.value;
      if (item.key === "contact-instagram") acc.instagram = item.value;

      return acc;
    },
    {}
  );
  return (
    <footer className={styles.wraper}>
      <div className={styles.container}>
        <Link href={"/"}>
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <Link href={"/menu/kava"}>меню</Link>
          </li>
          <li>
            <Link href={"/about"}>про нас</Link>
          </li>
          <li>
            <Link href={"/gallery"}>галерея</Link>
          </li>
        </ul>

        <div className={styles.contacts}>
          <p>{addres}</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.contacts}>
          <a href={`tel:${number}`}>{number}</a>
          <div className={styles.socials}>
            <a href={facebook}>
              <FaFacebook className={styles.social} />
            </a>
            <a href={instagram}>
              <FaInstagram className={styles.social} />
            </a>
          </div>
        </div>
        <p className={styles.copy}>Copyright © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
