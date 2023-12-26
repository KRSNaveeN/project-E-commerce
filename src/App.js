import  {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from '../src/Components/Pages/Root';
import List from './Components/List';
import AboutRoot from './Components/Pages/AboutRoot';
import Home from './Components/Home';
import Movies from './Movies';
import Form from './Form';
import { useState } from 'react';
import Contact from './Components/Contact';



let router = createBrowserRouter([{
  path : '/' , element: <Root/>,  errorElement : <h1>Error Page</h1>, children :[
    {path : '/', element : <List/>}, {path:'/about', element : <AboutRoot/>}, {
      path : '/home', element: <Home/>
    },
    {
      path :'/contact', element : <Contact/>
    }
  ]},

  ])
function App() {

  
  async function collectdata(x,y,z){
    let obj ={
      title :x,
      openingtext : y,
      releasedate : z
    }
    console.log(obj);
    let response = await fetch("https://rect-61d4c-default-rtdb.firebaseio.com/movies.json", {
      method : 'POST',
      body : JSON.stringify(obj),
      headers:{
        'Content-Type':"Application/json",
        // "Access-Control-Allow-Origin": "*",
      }
     
    })

    const data = await response.json();
    console.log(data);

  }
 
  
  return (<RouterProvider router={router}/>
  // return <div style={{backgroundColor:"black"}}>

  // <Form collectdata={collectdata}/>
  
  // <Movies />
  // </div>
  
  );
}


export default App;
