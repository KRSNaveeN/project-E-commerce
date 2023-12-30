import Movies from './Movies';
import Form from './Form';


import Root from '../src/Components/Pages/Root';
import List from './Components/List';
import AboutRoot from './Components/Pages/AboutRoot';
import Home from './Components/Home';

import { useContext } from 'react';
import Contact from './Components/Contact';
import ProductDetail from './Components/ProductDetail';
import { BrowserRouter, Routes,Route } from 'react-router-dom/dist';
import Layout from './Components/Authentication/components/Layout/Layout'

import AuthContext from './Components/Authentication/store/AuthContext';
import AuthPage from './Components/Authentication/pages/AuthPage';
import StartingPageContent from './Components/Authentication/components/StartingPage/StartingPageContent';





function App() {
 let ctx =  useContext(AuthContext);
  
  

  return <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}> 
        
                   {!ctx.isLoggedIn && <Route path='/auth' element={ <AuthPage />}/>}
                   {!ctx.isLoggedIn &&<Route path='/auth/welcome' element ={<StartingPageContent/>}/>}
                   {ctx.isLoggedIn && <Route path='/auth' element = {<Root/>}>
                    <Route path='/auth' element={<List/>}/>
                    <Route path='/auth/welcome' element ={<StartingPageContent/>}/>
                    <Route path='/auth/store/about' element={<AboutRoot/>}/>
                    <Route path="/auth/store/home"element={<Home/>}/>
                    <Route path='/auth/store/contact' element={<Contact/>}/>
                    <Route path='/auth/store/productdetail/:id' element ={<ProductDetail/>}/>

                  </Route>
                  } 
                  
               </Route>
          </Routes>
   </BrowserRouter>
  
  
}


export default App;










// async function collectdata(x,y,z){
//   let obj ={
//     title :x,
//     openingtext : y,
//     releasedate : z
//   }
//   console.log(obj);
//   let response = await fetch("https://rect-61d4c-default-rtdb.firebaseio.com/movies.json", {
//     method : 'POST',
//     body : JSON.stringify(obj),
//     headers:{
//       'Content-Type':"Application/json",
//       // "Access-Control-Allow-Origin": "*",
//     }
   
//   })

//   const data = await response.json();
//   console.log(data);

// }







 // return (<RouterProvider router={router}/>
      

  
  // );

  
// let router = createBrowserRouter([{
//   path : '/' , element: <Root/>,  errorElement : <h1>Error Page</h1>, children :[
//     {path : '/', element : <List/>}, {path:'/about', element : <AboutRoot/>}, {
//       path : '/home', element: <Home/>
//     },
//     {
//       path :'/contact', element : <Contact/>
//     },
//     {
//       path :'/productdetail/:id', element : <ProductDetail/>
//     }
//   ]},

//   ])
