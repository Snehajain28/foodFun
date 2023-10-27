

import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";

export default function Navbar({login ,setLogin}) {

 const [click, setClick] = useState(true);
const handleham = () => {
    setClick(!click);
 }
 const style = click?"hidden":"hamburger";

 const handlescroll =() => {
  window.scrollTo({top:5000,behavior:"smooth"})
 }

 const handleLog = () => {
 setLogin(!login)
 }
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

    <div className="text-black " >
      
      <ul className={`${style}   md:flex md:flex-row md:items-center gap-[4vw]`}>
     
       <li>
          <Link to="/"  >Home</Link>
        </li>
       <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/specials" >Specials</Link>
        </li>
        <li className="select-none"
         onClick={handlescroll}
           >Contact
        </li>
       <li>{ 
        !login ?
         ( <Link to="/createuser" >Sign Up</Link>
       ):(<diiv></diiv>)} </li>
   
        <li>{   
        !login?
         ( <Link to="/login">Log In</Link>
        ):(<div></div>)} </li>

<li> { 
   login ? 
       <Link to="/">My Orders</Link>:null
   }</li> 
   <li> {
      login &&
      ( <Link to="/" onClick={handleLog}>Log Out</Link>
    )}  </li> 
     

      </ul>
    </div>
  <div> { login &&
    <AiOutlineShoppingCart size={40}/>
  }
   </div>
  </div >
</nav >

    </div >);
}