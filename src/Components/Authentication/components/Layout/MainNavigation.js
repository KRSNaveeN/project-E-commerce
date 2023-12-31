import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  let ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn;
  
  let trimmedEmail="";
  if(isLoggedIn)
  {
    let  x = localStorage.getItem("mail");
     trimmedEmail = x.replace(/@gmail\.com$/, '');
  }
  let value = <div>
    <div>Welcome</div>
    <div>{trimmedEmail}</div>
  </div>
  return (
    <header className={classes.header}>
      <Link to='/auth/welcome'><div className={classes.logo}>{ctx.isLoggedIn ? value : "E-Commerce"}</div></Link>
    {
      isLoggedIn &&   <div className={classes.gap}>
      <NavLink to='/auth/store/home'>HOME</NavLink>
      <NavLink to ="/auth" >STORE</NavLink>
      <NavLink to='/auth/store/about' >ABOUT</NavLink>
      <NavLink to ='/auth/store/contact'>CONTACT</NavLink>
</div>
    }
      <nav>
         <ul>
          {!isLoggedIn && <li><Link to='/auth'>Login</Link></li>}
           


          {isLoggedIn && <li><button onClick={ctx.logout}><Link to='/auth'>Logout</Link></button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
