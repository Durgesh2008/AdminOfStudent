import React, { useState } from 'react'
import {InfoCircleOutlined,UserAddOutlined,FilePdfOutlined,LoginOutlined}  from '@ant-design/icons'
import AddUser from '../../Component/AddUser';
import Certificate from '../../Component/Certificate';
import UserInfo from '../../Component/UserInfo';
// import UserProfile from '../../Component/UserProfile'
// import Certificate from '../../Component/Certificate'
// import UserInfo from '../../Component/UserInfo'
// import AddUser from '../../Component/AddUser'
const Sidebar = () => {
    const [IsclickMenu,setIsnotclickMenu]=useState(true)
    const [IsclickUserinfo,setIsnotclickUserInfo]=useState(true);
    const [IsclickAdduser,setIsnotclickAdduser]=useState(false);
   
    const [IsclickLogout,setIsnotclickLogout]=useState(false)
const handleMenu=()=>{
    setIsnotclickMenu(!IsclickMenu);
}
const allfalse=()=>{
    setIsnotclickUserInfo(false);
    setIsnotclickAdduser(false);
   
    setIsnotclickLogout(false);

}
const LogoutHandle=()=>{
    allfalse();
    setIsnotclickLogout(true);
    localStorage.removeItem('Token');
   window.location.reload();
}

const UserinfoHandle=()=>{
    allfalse();
    setIsnotclickUserInfo(true)
}
const AddUserHandle=()=>{
    allfalse();
    setIsnotclickAdduser(true)
}
    return (
        <div>

            <button data-drawer-target="sidebar-multi-level-sidebar"  aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg onClick={handleMenu} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className={`fixed top-55 left-0 z-40  w-64 h-screen transition-transform ${IsclickMenu?'-translate-x-full':'-translate-x-0'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 bg-[white]  py-4 overflow-y-auto  dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                       
                        <li  onClick={UserinfoHandle} className='text-xl font-s1 text-[#5B5B5B]'>
                            <span className={`flex cursor-pointer transform active:scale-50 transition-transform  items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${IsclickUserinfo && 'bg-[#108C97] text-[#ffffff]'}`}>
                            <InfoCircleOutlined />
                                <span className={`ml-3 ${IsclickUserinfo?'text-[#ffffff]':'text-[#5B5B5B]'} `}>User Info</span>
                            </span>
                        </li>
                       
                        <li onClick={AddUserHandle} className='text-xl font-s1 text-[#5B5B5B]'>
                           <span  className={`flex cursor-pointer transform active:scale-50 transition-transform  items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${IsclickAdduser && 'bg-[#108C97] text-[#ffffff]'}`}>
                            <UserAddOutlined />
                                <span className={`ml-3 ${IsclickAdduser?'text-[#ffffff]':'text-[#5B5B5B]'} `}>Add User</span>
                            </span>
                        </li>
                        <li onClick={LogoutHandle} className='text-xl font-s1 text-[#5B5B5B] pt-12'>
                           <span  className={`flex cursor-pointer transform active:scale-50 transition-transform  items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group ${IsclickLogout && 'bg-[#108C97] text-[#ffffff]'}`}>
                            <LoginOutlined />
                                <span className={`ml-3 ${IsclickLogout?'text-[#ffffff]':'text-[#5B5B5B]'} `}>Logout</span>
                            </span>
                        </li>

                      
                        
                        
                       
                        
                        
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 bg-[#E4F7F9] rounded h-full md:h-[83vh]">
              {IsclickAdduser && <AddUser/>}
            
               {IsclickUserinfo && <UserInfo/>}
            </div>

        </div>
    )
}

export default Sidebar