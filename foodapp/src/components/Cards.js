import Card from './Card';


function Cards ({Data}){

return (<div className='w-11/12 mx-auto flex flex-wrap'> 

{
  Data.map((item) => { 
    return (
<Card item={item}></Card>
    )
    }
   )
}

  
</div>);
}
export default Cards;