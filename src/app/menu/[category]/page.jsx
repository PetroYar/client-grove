import ProductCard from "@/app/common/components/productCard/ProductCard";
import { getData } from "@/app/common/libs/services";
import styles from "./Products.module.scss";

import Pagination from "@/app/common/components/pagination/Pagination";

const fetchData = async (slug, start, limit) => {
  try {
    return await getData(
      `/products/category/${slug}?_start=${start}&_limit=${limit}`
    );
  } catch (error) {
    console.error(error);
  }
};

const ProductsPage = async ({ params, searchParams }) => {
  const { category } = await params;

  const searchParamsObj = await searchParams;
  const start = parseInt(searchParamsObj?._start || 0, 10);
  const limit = 3;

  const data = await fetchData(category, start, limit);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data?.products.map((product) => {
          return (
            <li key={product._id}>
              <ProductCard product={product} category={category} />
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={data?.currentPage}
        lastPage={data?.lastPage}
        limit={limit}
      />
    </div>
  );
};

export default ProductsPage;
