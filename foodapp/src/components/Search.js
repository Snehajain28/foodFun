

 const  Search = () => {

    return ( <div className="flex justify-center md:justify-start md:mx-[8rem]">
       <div className=" absolute top-[65vh] "
       ><input className="  w-[30rem] h-[2.5rem] rounded-lg  bg-white"
       placeholder="Want a specific Meal ?"
       type="text" />
       <button className="bg-orange-500  text-white font-bold rounded-md ml-1  px-3 py-2"
       >Search</button>
       </div>
    </div>)

}
export default Search;