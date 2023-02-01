import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "@next/font/google";
import SingleProduct from "@/components/SingleProduct";
import PartitonDiv from "@/components/partitiondiv";
const playfair = Playfair_Display({ subsets: ["latin"] });
import PRODUCTS from "../public/products.json";

type Props = {};

const products = (props: Props) => {
  return (
    <>
      <Navbar />
      <div>
        <div className="wrapper max-w-6xl m-auto">
          <h1 className={`text-5xl text-center my-12 ${playfair.className}`}>
            Products Page
          </h1>

          <div className="products-summary text-md leading-7 tracking-wide mb-12">
            <strong>Creative FoodChem </strong>is a leading supplier of food
            chemicals, providing a wide range of high-quality ingredients to the
            food industry. Our products include preservatives, acidulants,
            antioxidants, dough conditioners, and leavening agents, all of which
            play a critical role in maintaining the quality and shelf life of
            food products.
            <br />
            Whether it's preventing mold growth with calcium propionate,
            improving the texture of baked goods with L-Cysteine, or adding a
            tart flavor with citric acid.
            <br /> <br />
            <strong>Creative FoodChem </strong>has a solution for every need. We
            are committed to providing our customers with the best products and
            services, and our knowledgeable team is always available to assist
            with any questions or concerns.
          </div>

        <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800 via-red-900 my-4 rounded-lg"></div>

          <div className="allproducts grid gap-3 max-w-6xl md:grid-cols-2 m-auto px-4">
          <h1 className={`text-5xl text-center my-12 col-span-full ${playfair.className}`}>
            All Products
          </h1>
            {PRODUCTS.map((product, index) => (
              <div
                className={`flex justify-center mb-6  py-4 ${
                  index % 2 === 0 ? "border-r-2 border-gray-200" : ""
                } `}
              >
                <SingleProduct
                  name={product.name}
                  desc={product.description}
                  tag={product.tag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default products;
