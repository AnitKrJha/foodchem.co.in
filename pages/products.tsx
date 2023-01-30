import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"

type Props = {}

const products = (props: Props) => {
  return (
    <>
    <Navbar/>
    <div className="h-screen grid place-items-center">
      <h1 className="text-7xl">Products Page</h1>
    </div>
    <Footer/>
    </>
  )
}

export default products