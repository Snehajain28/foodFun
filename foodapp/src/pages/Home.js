import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Text from '../components/Text'


export default function Home ({login ,setLogin}) {

   
    return(<div className="w-screen image bg-black">
       <Navbar login={login} setLogin={setLogin}/>
       <div className="image"></div>
    <div className="bg-black"> 
   <Carousel/>
   <Text/>
   <div>
     </div>
      <Cards></Cards>
       </div>
    
   <Footer/>
    </div>)

}