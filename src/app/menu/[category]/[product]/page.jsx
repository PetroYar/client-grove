import { getData } from "@/app/common/libs/services";
import { cache } from "react";

const fetchData = cache(async (slug) => {
  try {
    return await getData(`/product/${slug}`);
  } catch (error) {
    console.error(error);
  }
});
export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = await fetchData(product);
 
  if (!data?.seo) {
    return {
      title: "Продукт не знайдено",
      description: "Опис відсутній",
      keywords: "",
    };
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      images: [
        {
          url: data.image,
          width: 300,
          height: 300,
          alt: data.seo.title,
        },
      ],
    },
  };
}

const ProductPage = async ({ params }) => {
  const { product } = await params;
  const data = await fetchData(product);

  return (
    <div>
      <img src={data.image} alt="" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProductPage;
