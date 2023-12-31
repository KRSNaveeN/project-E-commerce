import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import MainNavigation from './MainNavigation';

import { Outlet } from 'react-router-dom/dist';

const Layout = () => {
  let ctx =  useContext(AuthContext);
  return <>
         <MainNavigation/>
         <Outlet/>
    </>
};

export default Layout;
