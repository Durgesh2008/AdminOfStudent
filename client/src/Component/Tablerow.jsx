import React,{useState} from 'react'
import { Modal } from 'antd';
import UserProfile from './UserProfile';
import { useEffect } from 'react';
import Certificate from './Certificate'
import { useUserAuth } from '../context/userAuth';
const Tablerow = ({ele}) => {
  
   
    const [IsViewbtnClicked, setIsViewbtnClicked] = useState(false);
    const [IsEditbtnClicked, setIsEditbtnClicked] = useState(false);
    const [IsCertificatebtnClicked, setIsCetificatebtnClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelitem,setmodelitem]=useState({Joining: ele.Joining,collegeName:ele.collegeName,course: ele.course,email: ele.email,ending: ele.ending,phone: ele.phone,username:ele.username}
    )
    
   
       


    const HandleChange = (e) => {
        let { name, value } = e.target;
        setmodelitem({ ...modelitem, [name]: value });
      }

    const {DeleteUser,UpdateUser}=useUserAuth();

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const HandleAction = (e) => {
        let btn = e.target.id;
        switch (btn) {
            case 'view':{
                setIsViewbtnClicked(true);
                break;
            }
            case 'delete':{
                DeleteUser(ele._id);
                break;

            }
            case 'edit':{

                setIsModalOpen(true);
                setIsEditbtnClicked(true)
                break;
            }
            case 'certificate':
                setIsCetificatebtnClicked(true);
                break;

        }}
        const UpdateData=(e)=>{
            e.preventDefault();
        UpdateUser(modelitem,ele._id)
        alert("user Updated")
        setIsModalOpen(false);

        }

  return (
    <>
    <tr className="bg-white font-s2   xl:text-base border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      { ele.username
}
    </th>
    <td className="px-6 py-4 hidden xl:table-cell">
     {ele.email.slice(0,6)+".."}
    </td>
    <td className="px-6 py-4 hidden xl:table-cell">
     {ele.phone}
    </td>
    <td className="px-6 py-4 hidden xl:table-cell">
       {ele.Joining}
    </td>
    <td className="px-6 py-4 hidden xl:table-cell">
       {ele.ending}
    </td>

    <td className="px-6 py-4">
       {ele._id.slice(0,12)}
    </td>
    <td onClick={HandleAction} className="px-6 py-4 text-right xl:text-xl flex items-center justify-between gap-2 ">
          <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='view' viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
        <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='edit' viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
        <svg className='w-full cursor-pointer transform active:scale-50 transition-transform' id='delete' viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
        <svg className='w-full cursor-pointer  transform active:scale-50 transition-transform' id='certificate' viewBox="64 64 896 896" focusable="false" data-icon="folder-view" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M309.1 554.3a42.92 42.92 0 000 36.4C353.3 684 421.6 732 512.5 732s159.2-48.1 203.4-141.3c5.4-11.5 5.4-24.8.1-36.3l-.1-.1-.1-.1C671.7 461 603.4 413 512.5 413s-159.2 48.1-203.4 141.3zM512.5 477c62.1 0 107.4 30 141.1 95.5C620 638 574.6 668 512.5 668s-107.4-30-141.1-95.5c33.7-65.5 79-95.5 141.1-95.5z"></path><path d="M457 573a56 56 0 10112 0 56 56 0 10-112 0z"></path><path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path></svg>
    </td>
</tr>
  {/* onOk={handleOk} from ke under btn par click kate model gayab */}
{IsEditbtnClicked &&  <Modal className='text-2xl font-s2' title="Update User" open={isModalOpen} onCancel={handleCancel} footer={null} >

<form className='w-full'>

<div className="relative mb-4 border">
    <input type="text"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name='username' value={modelitem.username} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
</div>
<div className="relative mb-4 border">
    <input type="email"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name='email' value={modelitem.email} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
</div>

<div className="relative mb-4 border">
    <input type="tel"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name='phone' value={modelitem.phone} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Mobile No</label>
</div>
<div className="relative mb-4 border">
    <input type="text"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name='Joining' value={modelitem.Joining} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ending Date</label>
</div>
<div className="relative mb-4 border">
    <input type="text"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name='ending' value={modelitem.ending} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Joining Date</label>
</div>
<div className="relative mb-4 border">
    <input type="text"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name='course' value={modelitem.course} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Course Name</label>
</div>
<div className="relative mb-4 border">
    <input type="text"  onChange={HandleChange} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name='collegeName' value={modelitem.collegeName} />
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">College Name</label>
</div>

<button onClick={UpdateData} className="text-white mx-auto font-s1 flex justify-center text-center text-base font-medium bg-[#19A5B1] border-0 py-2 px-8 focus:outline-none hover:bg-[#3ed4e5] hover:text-[#ffffff] rounded-[5px]  md:w-[220px] md-h-[38px]  transform active:scale-50 transition-transform ">Create</button>
</form>

</Modal>}





<div  className={`fixed top-[2%]   z-50 ${IsViewbtnClicked?"":'hidden'}  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
  
     
         
           
                <button type="button" className="text-gray-400  bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8  dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg onClick={()=>setIsViewbtnClicked(false)} className="w-4 absolute top-[10%] z-50 end-[15%] h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                   
                </button>
            
               <UserProfile ele={ele}/>
               
         

  
</div>

<div  className={`fixed top-[2%] left-[45%]  z-50 ${IsCertificatebtnClicked?"":'hidden'}  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
  
     
     
         
           
                <button type="button" className="text-gray-400  bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8  dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg onClick={()=>setIsCetificatebtnClicked(false)} className="w-4 absolute top-[10%] z-50 end-[15%] h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                   
                </button>
            
            <Certificate ele={ele}/>
               
         
            
      
  
</div>


</>
  )
}

export default Tablerow
