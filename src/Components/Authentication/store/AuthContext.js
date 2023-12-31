import React, { useEffect, useState, useContext } from 'react';
const AuthContext = React.createContext({
  token : '',
  isLoggedIn : false,
  login :(token)=>{},
  logout : ()=>{},
  autodelete : ()=>{},
  localId:''
});
export default AuthContext;

export const AuthContextProvider = (props)=>{

    const localtoken = localStorage.getItem("token");

    const [token , setToken] = useState(localtoken);
    const [localId, setLocalid] =useState();

    const userIsLoggedIn = !!token;
 
    const autodelete = ()=>{
                localStorage.removeItem("token");
                localStorage.removeItem("timer");
                setToken(null);     
    }

    const loginHandler = (token,id , mail)=>{
        setToken(token);
        setLocalid(id);


        localStorage.setItem("timer", Date.now());
        localStorage.setItem("token", token);
        localStorage.setItem("data", id);
        localStorage.setItem("mail", mail);

        // setTimeout(()=>{console.log("inside settimeout");localStorage.removeItem("token"); setToken(null)},10000);
        
    };
    const logoutHandler = ()=>{
        setToken(null);
        setLocalid(null);
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        localStorage.removeItem("mail");
        
    };

    // useEffect(()=>{
        
    // },[])

    const contextValue = {
        token:token,
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler,
        autodelete : autodelete,
        id:localId
    }
    return<AuthContext.Provider value ={contextValue}>
        {props.children}
    </AuthContext.Provider>
}