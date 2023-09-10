import React, { useState,useEffect } from 'react'

import { Link,useNavigate } from 'react-router-dom'
import LoginGoogle from '../../Component/LoginGoogle'
import { useUserAuth } from '../../context/userAuth'
const Login = () => {
  const {LoginAdmin}=useUserAuth();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");


  const navigate = useNavigate();
  useEffect(()=>{
   let token= localStorage.getItem('Token');
 if(!token){
navigate('/login');
 }else{
  navigate('/navbar');
 }

  },[])

  const postdata=async()=>{
    let res=LoginAdmin(email,password);
    let data=await res;
    if(data.success){
      localStorage.setItem("Token", data.authtoken);
      alert("user login successfully")
      navigate('/navbar')
    }
   else{
     alert("error")
   }}
  return (
   <div className='flex items-center justify-center' >
   <section className="text-gray-600 body-font ">
  <div className="container px-5 md:mt-6 mx-auto flex flex-wrap items-center md:w-[1040px] md:h-[592px]">
    <div className="lg:w-3/5  md:pr-16 lg:pr-0 pr-0 md:w-[520px] bg-[#108C97] rounded-[5px]   md:h-[592px] md:flex md:items-center md:justify-center md:flex-col md:flex-1">
      <h1 className="font-s1  font-[700] text-[white] text-3xl md-text-[32px] px-10 ">Shoppeal</h1>
      <p className="leading-relaxed mt-4 text-[#FFFFFF9E] text-center px-10  text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo a, doloremque ducimus quis laboriosam pariatur eius deserunt reiciendis iste.</p>
    </div>

    <div className="lg:w-2/6   justify-center bg-[#E4F7F9]  rounded-[5px] -lg flex flex-col md:px-10 py-10 md:py-0 w-full mt-1 md:mt-0 md:w-[520px] md:h-[592px]  md:flex-1">
      <h2 className="text-lg font-medium title-font mb-5  text-[#000] md:mt-10 md:text-[32px] ">Login</h2>
      <div className="relative mb-4">
        <input onChange={(e)=>setemail(e.target.value)} type="email"  name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Username' value={email}/>
      </div>
      <div className="relative mb-4">
        <input onChange={(e)=>setpassword(e.target.value)} type="password"  name="full-name" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Password'  value={password}/>
      </div>
      <div className="relative mb-4 flex items-center justify-center flex-col">
      <button onClick={postdata} className="text-white mx-auto font-s1 text-base font-medium bg-[#19A5B1] border-0 py-2 px-8 focus:outline-none hover:bg-[#3ed4e5] hover:text-[#ffffff] rounded-[5px]  md:w-[129px] md-h-[38px]  transform active:scale-50 transition-transform ">Sign Up</button>
      <p className='my-4'>OR</p>
      {/* <Link to={'/phoneLogin'} className="relative  w-full flex items-start">
        <div className="absolute   inset-y-0  flex items-center pl-4 md:pl-[120px] pointer-events-none">
           <img src={Phone} alt="Google Logo" />
        </div>
        <input type="button" id="default-search" className="block cursor-pointer text-[#8B9899] w-full p-4 pl-10 text-base font-s2 font-medium  border border-gray-300 rounded-[5px] -lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " value="Login With Phone" />
       
    </Link> */}
      <LoginGoogle/>
    
      </div>
      <p className="text-xs font-medium text-[#535353] font-s2 text-center mt-1">Already a member? <Link to={'/'} className='font-semibold text-[#F07319]'>Sign up</Link></p>
      <Link to={'/forget'} className="text-xs font-medium text-[#108C97] font-s2 text-center mt-1">Forget Password </Link>
    </div>
  </div>
</section>
   </div>
  )
}

export default Login