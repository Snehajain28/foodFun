import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import { Data } from "../data/foodData";

export default function Home () {

    return(<div className="w-screen">
       <Navbar/>
    <Carousel/>
       <div>
        <Cards Data={Data}></Cards>
       </div>
<Footer/>
    </div>)

}