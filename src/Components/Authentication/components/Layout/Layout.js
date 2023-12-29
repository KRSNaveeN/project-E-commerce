import { Fragment, useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import MainNavigation from './MainNavigation';

import UserProfile from '../Profile/UserProfile';
import { Outlet } from 'react-router-dom/dist';
import Root from '../../../Pages/Root';
import Header from '../../../Header';
  
const Layout = () => {
  let ctx =  useContext(AuthContext);
  return <>
         <MainNavigation/>
         <Outlet/>
    </>
};

export default Layout;
