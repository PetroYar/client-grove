import Image from "next/image";
import styles from "./ProductCard.module.scss";
import Link from "next/link";

const ProductCard = ({ product,category }) => {
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <Image src={product.image} alt={product.name} fill  />
      </div>
      <h6>{product.name}</h6>
      <p>{product.description}</p>
      <Link href={`/menu/${category}/${product.slug}`}>link</Link>
      <div className={styles.flex}>
        <span className={styles.size}>{product.size}</span>
        <span className={styles.price}>{product.price}</span>
      </div>
    </article>
  );
};

export default ProductCard;
