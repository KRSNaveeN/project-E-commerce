import React from 'react';
import { useState,useEffect } from 'react';
import Dummydata from '../Cart/dummydata';

     let Context = React.createContext({listitems:[], setlistItems:()=>{}, cartTotal : 0,  addtoCart : ()=>{},data: 0, setCarttotal : ()=>{}});

     export default Context;

     export let Auth = (props)=>{

    const [ listitems, setlistItems] = useState([]);
    let [cartTotal, setCarttotal] = useState(0);

    useEffect(()=>{ return setlistItems(Dummydata)},[]);



    function addtoCart(item){

        setCarttotal((pre)=>pre+1);
       
        console.log(cartTotal);
        let index = listitems.findIndex((eachitem)=> eachitem.title === item.title);
        let updatedArray = [...listitems];
        updatedArray[index] = {...updatedArray[index] , count : Number(updatedArray[index].count) + 1  };
        setlistItems(updatedArray);
    };


        return <Context.Provider value={{ setlistItems:setlistItems, listitems : listitems,setCarttotal:setCarttotal, cartTotal:cartTotal,  addtoCart:addtoCart}} >
        {props.children}
        </Context.Provider>
     }
