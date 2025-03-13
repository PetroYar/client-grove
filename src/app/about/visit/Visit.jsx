import TitleH2 from "@/app/common/components/titleH2/TitleH2";
import styles from "./Visit.module.scss";
import Paragraph from "@/app/common/components/paragraph/Paragraph";

const Visit = ({ data }) => {
  const daysOfWeek = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота",
    "неділя",
  ];

  return (
    <div className={styles.container}>
    <p className={styles.text}>  Завітайте до нас, щоб насолодитися ароматною кавою та затишною
      атмосферою! У нашій кав'ярні вас зустріне дружній сервіс і тепло, яке
      робить кожен візит особливим.
      </p>
      <div className={styles.content}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.949292297333!2d25.608412065623636!3d49.39095119699816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4731b5cb62140e93%3A0x8775de9a1820213!2sGrove_Coffee!5e0!3m2!1sru!2sua!4v1741807687505!5m2!1sru!2sua"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <ul>
          {data.map((item, id) => {
            return (
              <li key={item._id}>
                <p>{daysOfWeek[id]}</p>
                <span className={styles.dashed}></span>
                <span>{item?.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Visit;
