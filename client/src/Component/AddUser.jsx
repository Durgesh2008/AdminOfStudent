import React, { useState } from 'react'
import { useUserAuth } from '../context/userAuth';

const AddUser = () => {
  const [AdduserData,setAdduserData]=useState({
    username:"",
    email:"",
    phone:"",
    Joining:"",
    ending:"",
    course:"",
    collegeName:""
  });
  const HandleChange = (e) => {
    let { name, value } = e.target;
    setAdduserData({ ...AdduserData, [name]: value });
  }
  const {AddnewUser}=useUserAuth();
  const PostData=async(e)=>{
    e.preventDefault();
  try {
    AddnewUser(AdduserData);
    alert("user Added")
  } catch (error) {
   alert("user Not Add")
  }
   
   
  }
  return (
    <div className='flex items-center justify-center w-full my-10'>
        
<form className='w-3/4'>
  <div className="mb-4 ">
  <input onChange={HandleChange}  type="text"  name="username" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Name' value={AdduserData.username}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="email"  name="email" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Email' value={AdduserData.email}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="tel"  name="phone" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Mobile No' value={AdduserData.phone}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="text"  name="Joining" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Joining Date' value={AdduserData.Joining}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="text"  name="ending" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Ending Date' value={AdduserData.ending}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="text"  name="course" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='Course Name' value={AdduserData.course}/>
  </div>
  <div className="mb-4">
  <input onChange={HandleChange}  type="text"  name="collegeName" className="w-full font-s2 bg-white rounded-[5px]  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 font-medium transition-colors duration-200 ease-in-out text-[#0A5E6659] " placeholder='College Name' value={AdduserData.collegeName}/>
  </div>
  <button onClick={PostData} className="text-white mx-auto font-s1 text-center text-base font-medium bg-[#19A5B1] border-0 py-2 px-8 focus:outline-none hover:bg-[#3ed4e5] hover:text-[#ffffff] rounded-[5px]  md:w-[220px] md-h-[38px]  transform active:scale-50 transition-transform ">Create</button>
</form>

    </div>
  )
}

export default AddUser