
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import Context from "../Store/Context";
import Dummydata from './dummydata';


const Cart = ()=>{

    let ctx = useContext(Context);
  

    function deleteHandler(x){
       console.log("btn clicked");
     let index = ctx.listitems.findIndex((eachitem)=>eachitem.title === x.title);
     
     let updatearray = [...ctx.listitems];
     updatearray[index] = {...updatearray[index], count : Number(updatearray[index].count) - 1 }
     ctx.setlistItems(updatearray);
     ctx.setCarttotal((pre)=>pre-1);
    }
    console.log(ctx.listitems);
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