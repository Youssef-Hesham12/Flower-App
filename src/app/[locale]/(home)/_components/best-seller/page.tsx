import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CarouselComponent from "../best-seller-carousel";
import { getPopularProducts } from "@/lib/api/get-products.api";
import { getTranslations } from "next-intl/server";

export default async function BestSellerPage() {
  // Translation
  const t = await getTranslations();
  // Top 10 products
  const bestProducts = (await getPopularProducts("/products?sort=-sold&limit=10"))!;

  return (
    <section>
      <div className="main container mx-auto  items-center pt-20 flex md:flex-row flex-col   gap-6">
        {/* Text section */}
        <div className="best-info w-64">
          {/* Heading of the best seller section */}
          <h2 className="rtl:tracking-[0] rtl:text-xl text-custom-rose-900 leading-[30px] font-roboto  uppercase tracking-[4px] font-bold text-[17px] pb-7">
            {t("premium-gifts")}
          </h2>
          <h3 className="font-bold font-inter text-custom-blue-900 text-3xl capitalize leading-10">
            {t.rich("best-selling-header", {
              span: (v) => <span className="text-custom-rose-900">{v}</span>,
            })}
          </h3>

          {/* Description */}
          <p className="font-normal text-base font-roboto leading-7 text-custom-muted pt-4 pb-7 ">
            {t("recusandae-tempora-aut-la")}
          </p>

          {/* Explore more button */}
          <div>
            <Button className="bg-custom-rose-900 h-[50px] font-medium text-base text-white rounded-md hover:bg-custom-rose-800 ps-5  py-[10px] ">
              {t("explore-more-0")}
              <FaArrowRight className="rtl:scale-x-[-1]" />
            </Button>
          </div>
        </div>

        {/* Carousel component */}
        <div className="carousel md:w-[calc(90%-15rem)] w-10/12">
          <CarouselComponent bestProducts={bestProducts} />
        </div>
      </div>
    </section>
  );
}
