import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
type Props = { name: string; tag: string; desc: string };

const SingleProduct = (props: Props) => {
  const { name, tag, desc } = props;
 
  let color='blue'

  if(tag=='Preservative')color='bg-blue-500'
  else if(tag=='Acidulant')color='bg-red-500'
  else color='bg-green-500'

  

  return (
    <div className="container w-full max-w-sm flex flex-col items-center gap-2">
      <div className="image max-w-xs">
        <Image
          src={`https://unsplash.it/400/500`}
          width={300}
          height={400}
          alt={name}
          className={
            "w-full rounded-md drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition-all"
          }
          priority={true}
        />
      </div>
      <h2 className="name text-3xl font-bold mt-4">{name}</h2>
      <p
        className={`text-xs inline ${color} italic font-bold text-white py-1 px-2 rounded-lg 
                  `}
      >
        {tag}
      </p>
      <p className="desc text-center px-6 mb-2">{desc}</p>

      <Button href="/contact" type="block" text="Enquire" arrow={true} />
    </div>
  );
};

export default SingleProduct;
