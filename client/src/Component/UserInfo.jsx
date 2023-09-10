import React, { useState,useEffect } from 'react'

import Tablerow from './Tablerow';
import axios from 'axios';
import Pagination from './Pagination';
// import { useUserAuth } from '../context/userAuth';

const UserInfo = () => {
const [User,setUser]=useState([]);
const [page,setpage]=useState(1);
const [totalpage,settotalpage]=useState(1);

const fetchalluser=async(page)=>{
    const perPage=7;
    try {
      let res=await axios.get(`http://localhost:5000/api/alluser/fetchallUser?page=${page}&perPage=${perPage}`);
      const data=res.data;
      if(User!==data){
          setUser(data.list);
        
      }
    settotalpage(data.totalPages);
    } catch (error) {
     return error;
    }
    }
    
  
    useEffect(()=>{
        fetchalluser(page);
      },[User]);
     
     const handlepre=()=>{
        if(page>=1)
        setpage(page=>page-1);
     }
     const handlenext=()=>{
       if(page<totalpage)
        setpage(page=>page+1);
     }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-col flex justify-center items-center">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-base font-s1 bg-[#6EE5F0] text-[white] ">
                        <tr >
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Mobile No
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Joining Date
                            </th>
                            <th scope="col" className="px-6 py-3 hidden xl:table-cell">
                                Ending Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                       {User && User.map((ele)=>{
                        return (<Tablerow key={ele._id} ele={ele} />)
                       })}

                      
                    </tbody>
                </table>
             <Pagination totalpage={totalpage} setpage={setpage} handlepre={handlepre} handlenext={handlenext} page={page}/>
            </div>
        </div>
    )
}

export default UserInfo