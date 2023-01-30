import { Playfair_Display } from "@next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import Button from "./Button";

type Props = {}

const PartitonDiv = (props: Props) => {
  return (
    <div className='h-72 w-full bg-[url("/partitionbg.jpg")] cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 px-4 py-8'>

        <h1 className={`${playfair.className} text-4xl text-center text-white py-6`}>Quality Matters , Thats What Matters for Us </h1>
        <Button text={'See Products'} href={'/products'}/>
    </div>
  )
}

export default PartitonDiv