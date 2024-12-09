import React, {useContext, useEffect} from 'react'
import { DataContext } from './DataProvider/DataProvider'
import { useNavigate } from  'react-router-dom'

const ProtectedRoute = ({children, message, redirect}) => {
    const navigate = useNavigate()
    const [{user}, dispatch] = useContext(DataContext)
    useEffect(()=>{
        if(!user) {
            navigate("/auth", {state:{message, redirect}});
        }
    },[user]);

    return children; 
}


export default ProtectedRoute
