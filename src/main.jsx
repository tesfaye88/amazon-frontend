// import React ,{ StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {DataProvider} from './Components/DataProvider/DataProvider.jsx';
//  import {reducer,initialState} from './Components/Utility/reducer.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
  
   
//     <DataProvider  reducer={reducer} initialState={initialState}>
//       <App/>
//    </DataProvider> 
   
  
   

//  </StrictMode>
// );
import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {DataProvider} from './Components/DataProvider/DataProvider.jsx'
 import {reducer,initialState} from './Components/Utility/reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   
    <DataProvider  reducer={reducer} initialState={initialState}>
    <App/>
    </DataProvider>
      
   </StrictMode>,
)