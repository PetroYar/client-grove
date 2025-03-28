import Hero from "./common/components/home/hero/Hero";
import Promo from "./common/components/home/promo/Promo";

import { getData } from "@/app/common/libs/services";
import Reviews from "./common/components/home/reviews/Reviews";
import Gallery from "./common/components/home/gallery/Gallery";

const fetchData = async () => {
  try {
    return await getData("/content/page/home");
  } catch (error) {
    console.error("Error during fetching:", error);
  }
};

export default async function Home() {
  const data = await fetchData();
  

  const groupedData = data?.reduce(
    (acc, item) => {
      if (item.key.includes("hero")) {
        acc.hero.push(item);
      } else if (item.key.includes("promo")) {
        acc.promo.push(item);
      }
       else if (item.key.includes("gallery")) {
        acc.gallery.push(item);
      }
      return acc;
    },
    { hero: [], promo: [], gallery:[] }
  );

  return (
    <div>
      <Hero data={groupedData?.hero} />
      <Promo />
      <Gallery data={groupedData?.gallery} />
      <Reviews />
    </div>
  );
}
