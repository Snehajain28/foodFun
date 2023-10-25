
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'


export default function Navbar() {



  const [click, setClick] = useState(true);
const handleham = () => {
    setClick(!click);
 }
 const style = click?"hidden":"hamburger";

  return (<div className="relative bg-black bg-opacity-50 h-18 text-white ittalic font-bold"> 


<nav className=" w-full h-[5rem]">
  <div className="max-w-screen-xl flex  w-11/12 items-center justify-between mx-auto p-4">
    <div className="flex flex-wrap gap-2">
        <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" className="h-12 border rounded-[35%] mr-3" />
        <span className="self-center text-2xl font-semibold italic ">Delicious Eats</span>
    </div>
    
    < div className="md:hidden ml-[20rem]  " >
      <button  className="btn"
      onClick={handleham}>
     {click?<GiHamburgerMenu size={35}/>:<RxCross2 size={35}/>}
      
    </button>
    </div>

    <div className=" " >
      
      <ul className={`${style} md:flex md:flex-row md:items-center gap-[4vw]`}>
        <li>
          <Link to="/home" className=" py-2 pl-3 pr-4 text-gray-900  md:text-white md:p-0" >Home</Link>
        </li>
        <li>
          <Link to="/about" className=" py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Menu</Link>
        </li>
        <li>
          <Link to="/services" className=" py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Specials</Link>
        </li>
        <li>
          <Link to="/contact" className=" py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</Link>
        </li>
        <li>
          <Link to="/createuser" className=" py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div >
</nav >

    </div >);
}