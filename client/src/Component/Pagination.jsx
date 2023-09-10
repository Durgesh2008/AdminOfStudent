import React from 'react'



const Pagination = ({totalpage,setpage,handlepre,handlenext,page}) => {
const handePagination=(e)=>{
  let x=e.target.innerHTML;
if(x>=1){
 setpage(parseInt(x));
}
}
 
  return (
   <>

   <nav aria-label="Page navigation example" className='text-center cursor-pointer my-3'>
  <ul onClick={handePagination} className="flex items-center -space-x-px h-10 text-base">
    <li onClick={handlepre} >
      <span  className="flex bg-[#fcad36] items-center text-white text-xl justify-center px-4 h-10 ml-0 leading-tight  rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </span>
    </li>
    
  
   {
     Array.from({length: totalpage}, (_, index) => index + 1).map((ele,i)=>{
      return ( <li key={i} >
        <span  className={`flex ${page-1===i && 'bg-[#fcad36] '} rounded mx-1 items-center justify-center px-4 h-10 leading-tight text-[#7c3535]   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{ele}</span>
      </li>)
     })
   }
    
    
   
    
    <li onClick={handlenext}>
      <span  className="flex items-center bg-[#fcad36]   rounded justify-center px-4 h-10 leading-tight text-white text-xl  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </span>
    </li>
  </ul>
</nav>
   </>
  )
}

export default Pagination
