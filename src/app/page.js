import Hero from "./common/components/home/hero/Hero";
import Promo from "./common/components/home/promo/Promo";

import { getData } from "@/app/common/libs/services";

const fetchData = async () => {
  try {
    return await getData("/content/page/home");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};

export default async function Home() {
  const data = await fetchData();

 const groupedData = data.reduce(
   (acc, item) => {
     if (item.key.includes("hero")) {
       acc.hero.push(item);
     } else if (item.key.includes("promo")) {
       acc.promo.push(item);
     }
     return acc;
   },
   { hero: [], promo: [] }
 );

  return (
    <div>
      <Hero data={groupedData.hero} />
      <Promo />
    </div>
  );
}
