import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './Home.jsx'
import Success from "./Success.jsx"
import Cancel from "./Cancel.jsx"

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/success' element={<Success/>} ></Route>
      <Route path='/cancel' element={<Cancel/>} ></Route>
     </Routes>
    
    
    </div>
  )
}

export default App