import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


type Props = {}

const contact = (props: Props) => {
  return (
    <>
    <Navbar/>
    <div className="h-screen grid place-items-center">
      <h1 className="text-7xl">Contact Page</h1>
    </div>
    <Footer/>
    </>
  )
}

export default contact