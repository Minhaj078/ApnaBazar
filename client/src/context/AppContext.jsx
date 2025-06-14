import {createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>
{
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    // if it is true then user is already loggedin and there will be myorder button
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)

    const value = {navigate , user ,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
 } 
 export const useAppContext = ()=>
 {
    return useContext(AppContext)
 }