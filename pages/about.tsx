import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "@next/font/google";
import ProductsSection from "@/components/ProductsSection";
const playfair = Playfair_Display({ subsets: ["latin"] });
type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="wrapper max-w-7xl m-auto px-6  min-h-screen">
        <h1 className={`${playfair.className} text-5xl text-center py-12`}>
          About Us
        </h1>
        <div className="content text-md leading-7 tracking-wide">
          Creative FoodChem is a leading food chemical company established in
          2022. We are dedicated to distributing and supplying high-quality
          chemicals to the food industry, with a focus on preserving the
          freshness and longevity of food products.
          <br /> <br />
          <span className="text-xl font-bold">
            Our main products include :
          </span>{" "}
          <br />
          <li>
            <strong>Calcium Propionate </strong>
          </li>
          <li>
            <strong>Nova Mile</strong>
          </li>
          <br />
          We focus on ensuring the safety and quality of food products.
          <br />
          <br />
          At <strong>Creative FoodChem</strong>, we understand the importance of
          using only the best ingredients in food production. That's why we
          source our products from reputable suppliers and use state-of-the-art
          technology to manufacture and distribute our chemicals.
          <br />
          <br />
          Our team of experts has extensive experience in the food industry, and
          we are committed to providing our customers with the best possible
          service and support.
          <br />
          <br />
          At <strong>Creative FoodChem</strong>, we are committed to providing
          our customers with the highest quality products and services. Our team
          is dedicated to maintaining the highest standards of safety, quality,
          and customer satisfaction, and we are constantly working to improve
          our products and processes to meet the evolving needs of the food
          industry.
          <br />
          <br />
          We are also committed to <strong>environmental sustainability</strong>
          , and we take steps to minimize our impact on the environment through
          responsible sourcing and manufacturing practices.
        </div>
      <h1 className={`${playfair.className} my-12 text-center text-5xl py-6`}>Our Products Catalogue</h1>
      <ProductsSection count={4}/>
      </div>


      <Footer />
    </>
  );
};

export default about;
