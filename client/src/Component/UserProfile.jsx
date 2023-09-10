import React from 'react'
import { Col, Row } from 'antd';
import Image from '../asset/profile.png'

const UserProfile = ({ele}) => {
    function captilize(text) {
        if (text) {
            let str2 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            return str2;
        }
        return "";
    }

    return (
   
        <div className={`w-full flex  items-center justify-center z-10 relative `}>
                      
            <div className=" bg-white border h-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-3/4 py-12 px-4 mx-1 my-1">


                <Row className='p-3'>
                    <Col flex={2} className='flex flex-col items-center justify-center'>
                    <img className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={Image} alt="Bordered avatar"/>
                    <p className='  text-base md:text-xl mt-3'>
                          
                            <span className='font-s2 text-[#000000]  '> {captilize(ele.username)}</span>
                        </p>
                        <p className='  text-base md:text-xl '>
                          
                            <span className='font-s2 text-[#000000] text-[16px]  '> Student</span>
                        </p>
                    </Col>
                    <Col flex={3} className='flex flex-col md:items-start md:justify-center items-center justify-center'>
                        <span className='font-s1 text-xl text-[#000000] font-semibold'>Information</span>
                        <hr className='my-2 font-blod text-[#000000] ' />
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Name:</span>
                            <span className='font-s2 text-[#00000087]   '>{captilize(ele.username)}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Email:</span>
                            <span className='font-s2 text-[#00000087]   '> {ele.email}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Mobile No:</span>
                            <span className='font-s2 text-[#00000087]   '> {ele.phone}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-centerfont-medium'>Joining Date:</span>
                            <span className='font-s2 text-[#00000087]   '> {ele.Joining}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Ending Date:</span>
                            <span className='font-s2 text-[#00000087]   '> {ele.ending}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Course:</span>
                            <span className='font-s2 text-[#00000087]   '> {captilize(ele.course)}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>College Name:</span>
                            <span className='font-s2 text-[#00000087]   '> {captilize(ele.collegeName)}</span>
                        </p>
                        <p className='  text-base md:text-xl'>
                            <span className='font-s1 text-[#000000] text-center font-medium'>Certificate Id:</span>
                            <span className='font-s2 text-[#00000087]   '> {ele._id}</span>
                        </p>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default UserProfile