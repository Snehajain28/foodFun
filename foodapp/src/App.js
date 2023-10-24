import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div >
     <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route exact path='/contact' element={<Footer/>} ></Route>
      <Route exact path='/createuser' element={<Signup/>} ></Route>
      <Route exact path='/login' element={<Login/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
