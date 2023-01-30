import { AiFillPhone, AiOutlineCaretUp } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-wrapper bg-gray-100 pb-8 mt-4">
      <Link href={"#"}>
        <div className="gutter flex py-4 justify-center animate-bounce cursor-pointer text-red-600">
          <AiOutlineCaretUp size="1.5rem" />
        </div>
      </Link>
      <div className="footer max-w-7xl gap-5 flex-col flex md:flex-row mx-auto min-h-full pt-8 items-stretch">
        <div className="section  px-2  border-b-[1px] pb-4 pl-4 md:pl-2 md:border-r-[1px] md:border-b-0 border-gray-300 flex-col flex">
          <h2 className="font-semibold text-blue-800 pb-3 text-sm">
            Contact Us
          </h2>
          <h3 className="font-semibold text-blue-800 pb-3">
            Creative FoodChem Limited
          </h3>
          <p className="address text-blue-800 font-normal">
            A-8 , Arjun Park <br />
            Nagli Sakrawati , Near Pillar no. 50 <br />
            New Delhi 110043.
            <br />
            <br />
            Call Us : {<AiFillPhone />} +91-9871196937
          </p>
        </div>
        <div className="section  border-b-[1px] pb-4 pl-4 md:pl-2 md:border-r-[1px] md:border-b-0 border-gray-300 px-2">
          <h2 className="font-semibold text-blue-800 pb-3 text-sm">Links</h2>
          <ul className="links flex flex-col gap-4 font-light text-blue-800 ">
            <Link href={"/"}>
              <li className="hover:font-normal cursor-pointer">
                Privacy Policy
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:font-normal cursor-pointer">
                Terms & Conditions
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:font-normal cursor-pointer">About Us</li>
            </Link>
            <Link href={"/"}>
              <li className="hover:font-normal cursor-pointer">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="section  border-b-[1px] pb-4 pl-4 md:pl-2 md:border-r-[1px] md:border-b-0 border-gray-300 grow px-2">
          <h2 className="font-semibold text-blue-800 pb-3 text-sm tracking-wider">
            Join Our Mailing List
          </h2>

          <div className="input flex gap-3 flex-col sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="enter your email"
              className=" focus:outline-blue-800 text-blue-800 placeholder:text-blue-800 placeholder:opacity-80 placeholder:font-light px-4 py-4"
            />
            <Button text="Send" type="block" arrow={true} />
          </div>
          <div className="company-logo w-60 my-8 m-auto">
            <Image
              src={"/logo.jpeg"}
              width={500}
              height={500}
              alt={"footer-logo"}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <h3></h3>
    </div>
  );
};

export default Footer;
