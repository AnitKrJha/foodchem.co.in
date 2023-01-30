import Image from "next/image"
import Link from "next/link";
import Button from "./Button";

type Props = {name:string,tag:string}



const ProductCard = (props: Props) => {

  const {name,tag}=props;

  return (
    <div className="card flex flex-col max-w-[250px] items-center gap-1 flex-grow m-auto mb-4">
      <div className="image w-full h-full overflow-hidden">
        <Image src={'https://unsplash.it/200/300'} priority={true} width={200} height={300} alt='product image' className="hover:scale-110 hover:opacity-75 transition-all cursor-pointer"/>
      </div>
      <p className='text-xs mt-2'>{tag||'Tagline'}</p>
      <h2 className="name mb-2 font-semibold">{name?name:'Product'}</h2>
      <Button text="Read More" href={'/'}/>
    </div>
    
  )
}

export default ProductCard