import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Success from './pages/Success';
import Loginpage from "./pages/Loginpage";
import Failed from "./pages/Failed";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/success' element={<Success />}></Route>
    <Route path='/' element={<Loginpage />}></Route>
    <Route path='/failed' element={<Failed />}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App