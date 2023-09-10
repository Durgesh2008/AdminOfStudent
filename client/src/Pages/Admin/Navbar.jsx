import React from 'react'
import {SearchOutlined,BellOutlined,HeartOutlined,ShoppingCartOutlined,SettingOutlined,UserOutlined }  from '@ant-design/icons'
import Sidebar from './Sidebar'
import {useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Navbar = () => {
  
 
  const navigate = useNavigate();
  useEffect(()=>{
   let token= localStorage.getItem('Token');
 if(!token){
navigate('/login');
 }else{
  navigate('/navbar');
 }

  },[])
  return (
    
<>
<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
    <span  className="flex items-center">
        <img src="https://shoppealtech.com/images/svg/shoppeal.svg" className="w-[200px]  mr-3" alt="Flowbite Logo" />
      
    </span>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden  md:block md:w-auto" id="navbar-multi-level">
    <ul className=" md:text-3xl flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#00000078] md:p-0 md:dark:text-blue-500" aria-current="page"><SearchOutlined /></span>
      </li>
      <li>
      <span className="block py-2 pl-3 pr-4 text-[#00000078] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><BellOutlined /></span>
      </li>
      <li>
      <span className="block py-2 pl-3 pr-4 text-[#00000078] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><HeartOutlined /></span>
      </li>
      <li>
      <span className="block py-2 pl-3 pr-4 text-[#00000078] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><ShoppingCartOutlined /></span>
      </li>
      <li>
      <span className="block py-2 pl-3 pr-4 text-[#00000078] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><SettingOutlined /></span>
      </li>
      <li className='flex items-center  justify-center gap-2'>
      <span className="block py-2 pl-3 pr-4 text-[#00000078] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><UserOutlined /></span>
      </li>
      
    </ul>
    </div>
  </div>
</nav>
<Sidebar/>
</>

  )
}

export default Navbar
