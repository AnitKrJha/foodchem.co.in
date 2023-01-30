import Image from "next/image";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div className="w-full">
      <Image
        src={"/heroimage.jpg"}
        width={2000}
        height={2000}
        priority={true}
        alt={"Hero Image"}
      />
    </div>
  );
};

export default HeroImage;
