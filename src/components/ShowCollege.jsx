import React from 'react';
import { Link } from 'react-router-dom';

const ShowCollege = ({college}) => {
    const {id, name, image, admissionDates, researchHistory, sports, events} = college;
    return (
        <div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 transition-shadow hover:shadow-lg">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold tracki mb-4">College: {name}</h2>
                <p className='text-base font-semibold'>Admission Dates <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">{admissionDates}</span></p>
            </div>
            <p className="dark:text-gray-100 text-center"><span className='font-semibold text-base'>Research History : </span>{researchHistory}</p>
            <span className="list-disc py-2 dark:text-gray-100">
              <p className='text-center font-semibold text-base'>Events</p>
                {events.map((event, index) => (
                  <p className='border-t-2 border-b-2 flex justify-center' key={index}>{event.name}, {event.date}</p>
                  ))}
              </span>
              <p  className="dark:text-gray-100 text-center"><span  className='font-semibold text-base'>Annual Sports:</span> {sports}</p>
              <span className='flex justify-end'>
                <Link to={`/collegedetails/${id}`} className=" btn btn-sm self-center p-2 font-semibold hover:text-black bg-[#fc9928] text-white rounded-full shadow hover:bg-white transition-colors duration-500 hover:border-[#fc9928] border">Details</Link>
              </span>
        </div>
        </div>
    );
};

export default ShowCollege;