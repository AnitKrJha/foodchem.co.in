import { Playfair_Display } from "@next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import Image from "next/image";

type Props = {}

const OurPartners = (props: Props) => {
  return (
    <div className="partners-section max-w-7xl m-auto px-2 my-20">
      <h1
        className={`Heading    ${playfair.className} text-center text-5xl  text-gray-800`}
      >
        Our Partners
      </h1>
      <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-auto max-w-7xl justify-center pt-16 pb-4">
        {['','','',''].map((a,i)=>{
          return(
            <Image src={'https://unsplash.it/200/200'} width={200} height={200} alt={'partner Logo'+i} key={i} className='m-auto my-3'/>
          )
        })}
      </div>
    
    </div>
  )
}

export default OurPartners