
import { Link } from "react-router-dom";

export default function Navbar () {

  


    return(<div className="relative"> 


<nav className="  bg-white border-gray-200 border-[3px] ">
  <div className="max-w-screen-xl flex  w-11/12 items-center justify-between mx-auto p-4">
    <div className="flex flex-wrap gap-2">
        <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" className="h-11 border rounded-full mr-3" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">FoodFun</span>
    </div>
    
    <div>
      <button  className="md:hidden">
      <img className="h-7 w-10 ml-[325px]" 
      src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/01/hamburger-menu.png?fit=1200%2C600&ssl=1"></img>
      </button>
    </div>

    <div >
      <ul className="hidden  md:flex md:flex-row md:items-center gap-[4vw] ">
        <li>
          <Link to="#" className=" py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0" >Home</Link>
        </li>
        <li>
          <Link to="#" className=" py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">About</Link>
        </li>
        <li>
          <Link to="#" className=" py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Services</Link>
        </li>
        <li>
          <Link to="#" className=" py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Pricing</Link>
        </li>
        <li>
          <Link to="#" className=" py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact</Link>
        </li>
        <li>
          <Link to="/createuser" className=" py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>);
}