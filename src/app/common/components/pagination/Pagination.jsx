import Link from "next/link";
import styles from "./Pagination.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const Pagination = ({ currentPage, lastPage, limit }) => {

 if (lastPage <= 1) {
   
   return null;
 }

  return (

    <div className={styles.pagination}>
      {currentPage > 1 && (
        <Link href={`?_start=${(currentPage - 2) * limit}`}>
          <MdArrowBack className={styles.arrow} />
        </Link>
      )}

      {Array.from({ length: lastPage }, (_, index) => (
        <Link
          key={index}
          href={`?_start=${index * limit}&_limit=${limit}`}
          className={currentPage === index + 1 ? styles.active : ""}
        >
          {index + 1}
        </Link>
      ))}

      {currentPage < lastPage && (
        <Link href={`?_start=${currentPage * limit}&_limit=${limit}`}>
          <MdArrowForward className={styles.arrow} />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
