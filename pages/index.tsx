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
      <ProductsSection/>
      <PartitionDiv/>
      <Aboutus/>
      <PartitionDiv/>
      <OurPartners/>
      <Footer/>
    </>
  )
}

