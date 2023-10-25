import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import { Data } from "../data/foodData";
import Text from '../components/Text'
export default function Home () {

    return(<div className="w-screen image ">
       <Navbar/>
       <div className="image"></div>
    <div className="bg-black"> 
    <Carousel/>
   <Text/>
       <div>
        <Cards Data={Data}></Cards>
       </div>
       </div>
<Footer/>
    </div>)

}