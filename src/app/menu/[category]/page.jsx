import ProductCard from "@/app/common/components/productCard/ProductCard";
import { getData } from "@/app/common/libs/services";
import styles from "./Products.module.scss";

const fetchData = async (slug) => {
  try {
    return await getData(`/products/category/${slug}`);
  } catch (error) {
    console.error(error);
  }
};

const ProductsPage = async ({ params }) => {
  const { category } = await params;
  const data = await fetchData(category);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data?.map((product) => {
          return (
            <li key={product._id}>
              <ProductCard product={product} category={category} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
