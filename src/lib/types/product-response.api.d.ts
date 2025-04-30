declare type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: number;
  discount: number;
  sold: number;
} & ProductConstantFields;

declare type ProductResponse = {
  products: Product[];
};
