import Image from "next/image";
import Button from "./Button";

type Props = {};

const Aboutus = (props: Props) => {
  return (
    <div
      className="about-jist flex items-center max-w-7xl m-auto justify-between px-4 my-20 gap-3 flex-col md:flex-row
    "
    >
      <div className="image w-72 h-auto ">
        <Image
          src={"/logo.jpeg"}
          width={500}
          height={500}
          alt={"about logo"}
          className="w-full h-full"
        />
      </div>
      <div className="about-content lg:max-w-3xl md:max-w-xl  flex flex-col gap-4 relative mt-6 md:mt-0 ">
        <h2 className="headingabout text-lg font-semibold text-blue-700 ">About Us</h2>
        <p className=" md:px-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nam
            id voluptates inventore voluptatibus iusto ipsam illum excepturi, minus
            recusandae, porro harum. Sint cumque doloribus ea officiis, velit
            deleniti excepturi!
        </p>
      <div className="flex justify-start">

          <Button text="Read More" href="/about" />
      </div>
        
      </div>
    </div>
  );
};

export default Aboutus;
