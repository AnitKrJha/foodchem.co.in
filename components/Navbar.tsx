import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ACTIVELINKSTYLE = "border-b-[3px] border-red-600 ";
  const router = useRouter();

  return (
    <nav className="navbar relative">
      <div className="promotion uppercase bg-blue-800 text-white flex items-center justify-center py-2 ">
        the quality you expect is the quality we deliver
      </div>

      <div className="main-nav hidden md:flex justify-between  px-8 py-2  items-center shadow-sm">
        <ul className="links flex gap-5 text-blue-700">
          <Link href={"/"}>
            <li
              className={`link font-medium  border-blue-800 ${
                router.asPath === "/" ? ACTIVELINKSTYLE : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`link font-medium  border-blue-800 ${
                router.asPath === "/about" ? ACTIVELINKSTYLE : ""
              }`}
            >
              About Us
            </li>
          </Link>
          <Link href={"/products"}>
            <li
              className={`link font-medium  border-blue-800 ${
                router.asPath === "/products" ? ACTIVELINKSTYLE : ""
              }`}
            >
              Products
            </li>
          </Link>
          <Link href={"/shop"}>
            <li
              className={`link font-medium  border-blue-800 ${
                router.asPath === "/shop" ? ACTIVELINKSTYLE : ""
              }`}
            >
              Shop
            </li>
          </Link>
        </ul>
        <div className="logo h-14  flex items-center mr-40">
        <Image
            src="/logo.jpeg"
            alt=""
            className="w-full h-full"
            height={200}
            width={200}
          />
        </div>
        <div className="contactus">

          <Link href={'/contact'}>
            <button className="px-2 py-1 capitalize text-blue-900 text-md bg-blue-100  rounded-lg  hover:bg-blue-600 border-[3px] border-blue-700 font-medium hover:text-white transition-colors active:scale-95">
              {" "}
              contact us
            </button>
          </Link>
        </div>
      </div>

      <div className="main-logo flex justify-between px-2 items-center py-2 md:justify-center shadow-sm shadow-black md:hidden">
        <button
          className="hamburger md:hidden text-blue-700"
          onClick={handleMenu}
        >
          {!isMenuOpen ? (
            <AiOutlineMenu size={"2rem"} />
          ) : (
            <AiOutlineClose size={"2rem"} />
          )}
        </button>
        <div className="logo h-14   flex items-center ml-16">
          <Image
            src="/logo.jpeg"
            alt=""
            className="w-full h-full"
            height={200}
            width={200}
          />
        </div>
        <div className="contactus md:hidden">

          <Link href={'/contact'}>
            <button className="px-2 py-1 capitalize text-blue-900 text-md bg-blue-100  rounded-lg  hover:bg-blue-600 border-[3px] border-blue-700 font-medium hover:text-white transition-colors active:scale-95">
              {" "}
              contact us
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`extramenu flex flex-col bg-gray-100 overflow-y-hidden ${
          isMenuOpen ? "max-h-40 w-[200px]" : "max-h-0 max-w-0"
        } transition-all shadow-md absolute md:hidden`}
      >
        <ul className="links">
          <Link href={'/about'}>
              <li className="cursor-pointer link border-b  px-4 py-2 text-blue-700 font-medium bg-white   flex gap-5 hover:gap-6 active:gap-8">
                {<AiOutlineArrowRight />}About Us
              </li>
          </Link>

          <Link href={'/products'}>
              <li className="cursor-pointer link border-b  px-4 py-2  text-blue-700 font-medium bg-white  flex gap-5 hover:gap-6 active:gap-8">
                {<AiOutlineArrowRight />}Products
              </li>
          </Link>
          <Link href={'/shop'}>
              <li className="cursor-pointer link border-b  px-4 py-2 text-blue-700 font-medium bg-white   flex gap-5 hover:gap-6 active:gap-8">
                {<AiOutlineArrowRight />}Shop
              </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
