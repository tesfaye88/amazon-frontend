 import React,{ useEffect,useContext } from 'react'
import './App.css'
import Routing from './Router'
import { type } from '../src/Components/Utility/action.type';
import { auth } from '../src/Components/Utility/firebase'
import { DataContext } from './Components/DataProvider/DataProvider'

function App() {
  const [{user}, dispatch] = useContext(DataContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){  
        console.log(authUser)
        dispatch({ 
          type:type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type: type.SET_USER,
          user: null,
        });
      }
    });

  },[]);

  return (
    <>
          <Routing />
    


    </>
  )
}

export default App
