
function Card({item}) {
    
    return (<div className=" mt-[100px] h-6/12 text-white text-center p-3  max-w-[20rem] mx-auto ">
       
       <img className="h-[20rem] w-[30rem] rounded-[20%]"
        src={item.img}></img>
       <h1 className="text-2xl">{item.name}</h1>
      

    </div>)
}
export default Card;