
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import Context from "../../Store/Context";
import Dummydata from './dummydata';
import AuthContext from '../store/AuthContext';


const Cart = ()=>{
     let [id, setId] = useState({});
    let ctx = useContext(Context);
    let contx =   useContext(AuthContext);
    
    console.log("inside cart", contx.id);

    useEffect(()=>{
       setId(contx.id);
    },[contx.id])
      
  
    let fetching = async ()=>{
         let xt =  localStorage.getItem("data")
         console.log("inside fecthing");
         
        //  console.log(xt),
         console.log("fetching.....");
         let urls =`https://contactdetails-96801-default-rtdb.firebaseio.com/items/${xt}.json`;
         let ans = await fetch(urls);
         let data = await ans.json();
         console.log(data, typeof data);
         console.log(Object.values(data));
         let count = 0;
         let y = Object.values(data);
         y.map((item)=>{
          count = count+item.count;
         })
         ctx.setCarttotal(count);
         ctx.setlistItems(Object.values(data));
        


    };

    useEffect(()=>{
          fetching();      
     }, []);
  

    function deleteHandler(x){
       console.log("btn clicked");
       let xt =  localStorage.getItem("data")
      
       let urls =`https://contactdetails-96801-default-rtdb.firebaseio.com/items/${xt}/${x.title}.json`;
       ctx.setCarttotal((pre)=>pre-1);
       
     let index = ctx.listitems.findIndex((eachitem)=>eachitem.title === x.title);
     
     let updatearray = [...ctx.listitems];
     updatearray[index] = {...updatearray[index], count : Number(updatearray[index].count) - 1 };
     ctx.setlistItems(updatearray);
     fetch(urls, {
      method:'PUT',
      body:JSON.stringify(updatearray[index]),
      "Content-Type":'application/json',
  });
    
    }
    // console.log(ctx.listitems);
    return<Table size='md' responsive>

      <thead>

         <tr>
            <td>Item</td>
            <td>Price</td>
            <td>Quantity</td>
         </tr>
      </thead>
      <tbody>
      {
        ctx.listitems.map((item)=>{
          // x.map((item)=>{
            return ( item.count>0 && (<tr key={Math.random()}>
            <td><img style={{width:'40px'}} src={item.imageUrl}   alt="img"/>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.count} <Button variant="danger" onClick={()=>{deleteHandler(item)}} >Remove</Button></td>
        </tr>))
        })
    }
      </tbody>
 
    
    </Table>
}
export default Cart;