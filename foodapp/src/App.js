import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";


function App() {

  const [login,setLogin]=useState(false)
  return (
    <div className="">
     <Routes>
      <Route exact path='/' element={<Home login={login} setLogin={setLogin}/>} ></Route>
      <Route exact path='/createuser' element={<Signup setLogin={setLogin}/>} ></Route>
      <Route exact path='/login' element={<Login setLogin={setLogin}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
