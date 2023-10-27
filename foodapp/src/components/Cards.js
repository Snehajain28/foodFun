
import Card from './Card';
import {foodData} from '../data/foodData'
//import { burgerData } from '../data/bugerData';
 function Cards (){


return (<div className='w-11/12  mx-auto flex flex-wrap'> 
{foodData.map((data)=>{
 return (<Card data={data}></Card>)
}) }
{console.log("enter")}
{/*console.log(burgerData)*/}
</div>);
}
export default Cards;