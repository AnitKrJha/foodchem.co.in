import ProductCard from "./productcard";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Playfair_Display } from "@next/font/google";
import PRODUCTS from "../public/products.json";
const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {};

const ProductsSection = (props: Props) => {
  return (
    <div className="products-section max-w-7xl m-auto px-2 my-12">
      <h2 className="shopnow text-lg text-center mb-3">Shop Now</h2>
      <h1
        className={`Heading    ${playfair.className} text-center text-5xl  text-gray-800`}
      >
        Featured Products
      </h1>
      <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-auto max-w-7xl justify-center pt-16 pb-4">
        {PRODUCTS.map((product, index) => {
          return (
            <ProductCard
              name={`${product.name}`}
              tag={`${product.tag}`}
              key={index}
            />
          );
        })}
      </div>
      <div className="view-more text-center m-auto flex justify-center">
        <Button text="View More" arrow={true} href="/products" type="block" />
      </div>
    </div>
  );
};

export default ProductsSection;
