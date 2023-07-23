import React, { useEffect, useState } from 'react';
import ShowAllColleges from '../../components/ShowAllColleges';

const Colleges = () => {
    const [allColleges, setAllColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allcollege')
        .then(data => data.json())
        .then(data => setAllColleges(data))
    },[])
    return (
        <div>
            <div className='-mt-2'>
                <div className="hero h-[500px]  w-full" style={{backgroundImage: 'url(https://i.ibb.co/rxdzzHp/banner.png)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="font-serif">
                        <h1 className='text-6xl font-bold text-white mb-4'><span className='text-[#fc9928]'>OUR</span> COLLEGES</h1>
                    </div>
                </div>
            </div>
                <div className='grid md:grid-cols-4 gap-4 '>
                    
                    {
                        allColleges.map(allCollege => (
                            <div key={allCollege.id} className='flex justify-center'>
                                <ShowAllColleges allCollege={allCollege} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default Colleges;