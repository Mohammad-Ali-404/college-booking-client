import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllColleges = ({allCollege}) => {
    const { id, name, image, rating, admission_date, research_count } = allCollege;
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={name} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <div className="flex justify-between items-center mb-2">
                    <span>Rating: {rating}</span>
                    <span>Admission Date: {admission_date}</span>
                    </div>
                    <div className="mb-2">Research Count: {research_count}</div>
                    <Link to={`/college/${id}`} className="block w-full text-center text-white bg-blue-500 py-2 rounded-md font-semibold hover:bg-blue-600">
                    Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowAllColleges;