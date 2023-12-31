import React from 'react';
import { useState,useEffect ,useContext} from 'react';
import Dummydata from '../Authentication/Cart/dummydata';
import AuthContext from '../Authentication/store/AuthContext';


     let Context = React.createContext({listitems:[], setlistItems:()=>{}, cartTotal : 0,  addtoCart : ()=>{},data: 0, setCarttotal : ()=>{}});

     export default Context;

     export let Auth = (props)=>{

    const [ listitems, setlistItems] = useState(Dummydata);
    let [cartTotal, setCarttotal] = useState(0);
    let [id,setId] = useState();
    
     let contx = useContext(AuthContext);
    //  console.log(contx.id);
    console.log(id);

    useEffect(()=>{ 
     console.log("inside useeeeee");
     setlistItems(Dummydata);
      
     
    
    },[]);

    useEffect(()=>{
        console.log("inside contx.id");
        setId(contx.id);
        fetching()
    },[contx.id]);

    
    let fetching = async ()=>{
        let xt =  localStorage.getItem("data")
        console.log("inside fecthing");
        
       //  console.log(xt),
       if(xt){
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
       setCarttotal(count);
    }
        // ctx.setlistItems(Object.values(data));
    }

   
   

    function addtoCart(item){

        setCarttotal((pre)=>pre+1);
        let xt =  localStorage.getItem("data")
        let urls =`https://contactdetails-96801-default-rtdb.firebaseio.com/items/${xt}/${item.title}.json`;
        console.log(cartTotal);
        let index = listitems.findIndex((eachitem)=> eachitem.title === item.title);
        let updatedArray = [...listitems];
        console.log(updatedArray);
        console.log({...updatedArray[index]});
        updatedArray[index] = {...updatedArray[index] , count : Number(updatedArray[index].count) + 1  };
        setlistItems(updatedArray);
        fetch(urls, {
            method:'PUT',
            body:JSON.stringify(updatedArray[index]),
            "Content-Type":'application/json',
        });
    };


        return <Context.Provider value={{ setlistItems:setlistItems, listitems : listitems,setCarttotal:setCarttotal, cartTotal:cartTotal,  addtoCart:addtoCart}} >
        {props.children}
        </Context.Provider>
     }
