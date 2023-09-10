import React from 'react'

import './App.css'
import Navbar from './Pages/Admin/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Pages/Auth/Login'

import SignUp from './Pages/Auth/SignUp'
import {UserAuthContextProvider} from './context/userAuth'
import UserProfile from './Component/UserProfile';

const App = () => {
  return (
    <>

    <BrowserRouter>
       <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={ <SignUp/>}/>  
        <Route path="/login" element={ <Login/>}/>  
     
       
       <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
     
   
      </Routes>
        </UserAuthContextProvider>
    </BrowserRouter>
   
    
  
  

    </>
  )
}

export default App