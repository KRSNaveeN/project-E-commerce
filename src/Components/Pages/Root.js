import Header from '../Header'
import List from '../List';
import { Outlet } from 'react-router-dom';
const Root = () =>{
    return <>
       <Header/>
        <div style={{height:'40px', textAlign:'center', padding:'30px', backgroundColor:'grey'}}>The Generics</div>
       
       <Outlet/>
       
    </>
}

export default Root;