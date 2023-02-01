import Navbar from "@/components/Navbar"
import ProductsSection from "@/components/ProductsSection"
import Footer from "@/components/Footer"
import Aboutus from "@/components/Aboutus"
import OurPartners from "@/components/OurPartners"
import HeroImage from "@/components/HeroImage"
import PartitionDiv from "@/components/partitiondiv"

export default function Home() {
  return (
    <>
      
      <Navbar/>
      <HeroImage/>
      <ProductsSection count={8}/>
      <PartitionDiv/>
      <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800 via-red-900 my-4 rounded-lg"></div>

      <Aboutus/>
      {/* <PartitionDiv/> */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800 via-red-900 my-4 rounded-lg"></div>

      <OurPartners/>
      <Footer/>
    </>
  )
}

