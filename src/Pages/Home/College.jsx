/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ShowCollege from '../../components/ShowCollege';




const College = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/college')
        .then(data => data.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className='mt-16'>
            <div className='text-center font-serif'>
                <p className='text-3xl  font-light'>|</p>
                <p className='text-3xl mt-8'>BUILD YOUR CAREER</p>
                <h1 className='text-5xl mt-4 font-bold text-[#fc9928]'>Featured Colleges</h1>
            </div>
            <div className='w-full flex justify-center mt-8'>
            <div className='grid md:grid-cols-3 gap-10 '>
                
                {
                    colleges.map(college => (
                        <div key={college.id} className='flex justify-center'>
                            <ShowCollege college={college} />
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default College;