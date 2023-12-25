import  {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from '../src/Components/Pages/Root';
import List from './Components/List';
import AboutRoot from './Components/Pages/AboutRoot';
import Home from './Components/Home';
import Movies from './Movies';
import Form from './Form';


let router = createBrowserRouter([{
  path : '/' , element: <Root/>,  errorElement : <h1>Error Page</h1>, children :[
    {path : '/', element : <List/>}, {path:'/about', element : <AboutRoot/>}, {
      path : '/home', element: <Home/>
    }
  ]},

  ])
function App() {
  function collectdata(x,y,z){

  }
  
  // return (<RouterProvider router={router}/>
  return <>
  <Form collectdata={collectdata}/>
  <Movies/>
  </>
  
  // );
}


export default App;
