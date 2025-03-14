import { getData } from "@/app/common/libs/services";

const fetchData = async (slug) => {
  try {
    return await getData(`/product/${slug}`);
  } catch (error) {
    console.error(error);
  }
};
export async function generateMetadata({ data }) {
  return {
    title: data?.seo.title,
    description: data?.seo.description, 
    keywords: data?.seo.keywords.join(", "), 
  };
}
const page = async ({ params }) => {
  const { product } = await params;
  const data = await fetchData(product);
   await generateMetadata({ data });
 

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default page;
