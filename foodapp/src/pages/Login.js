import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login () {

    let navigate=useNavigate();

    const [formData, setformData] = useState({
       
        email: "",
       password: "",
      })

 const changeHandler = (e) => {
       setformData({...formData,
            [e.target.name]:e.target.value});
 }
  
  
 const handleSubmit = async(e)=> {
    e.preventDefault();
     const response = axios.post('http://localhost:5000/api/v1/login' , {email:formData.email,password:formData.password}
     ).
     then( async() => {
 
      
       localStorage.setItem("authtoken",response.token);
      console.log(localStorage.getItem("authtoken"))
     navigate('/');
     })
     .catch(() =>{
        console.log("login error")
     })
    
 }



return ( <div className="w-full h-full">
<div className="relative flex flex-col justify-center min-h-11/12 w-11/12 mt-[100px] mx-auto ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
                  Login
                </h1>
                <form onSubmit={handleSubmit}
                 className="mt-6">
                
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            onChange={changeHandler}
                            value={formData.email}
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                   
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={changeHandler}
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    New User ?
                   {" "}
                    <Link to='/createuser'
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            </div>

    </div>)

} 