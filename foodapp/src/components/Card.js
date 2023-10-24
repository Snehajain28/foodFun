
function Card({item}) {
    
    return (<div className=" mt-[100px] h-6/12  border-[2px] rounded-md border-gray-300 max-w-[20rem] mx-auto ">
       
       <img className="h-[20rem] w-[30rem]"
        src={item.img}></img>
       <h1 className="text-2xl">{item.name}</h1>
       <p>{item.description}</p>

    </div>)
}
export default Card;