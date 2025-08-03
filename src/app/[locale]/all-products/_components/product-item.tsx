import ProductCard from "@/components/features/product/product-card";
import ProductsPagination from "@/components/features/products-pagination/products-pagination";
import { getTranslations } from "next-intl/server";

type PopularProductsContentProps = {
  products: Product[];
  metadata: MetaData;
};

export default async function PopularProductsContent({
  products,
  metadata,
}: PopularProductsContentProps) {
  // translation
  const t = await getTranslations();

  return (
    <div className="flex justify-center flex-wrap">
      {products.length === 0 && (
        <div className="w-full text-center min-h-56 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-custom-blue-900">{t("no-products-founds")}</h2>
        </div>
      )}
      {products?.map((product: Product) => (
        <div key={product?._id} className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12  px-4 mb-6">
          <ProductCard product={product} />
        </div>
      ))}

      <ProductsPagination totalPages={metadata?.totalPages || 1} />
    </div>
  );
}
