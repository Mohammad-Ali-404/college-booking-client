import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData();
    const { name, image, admission_process, events, research_works, sports_categories } = college;

    return (
        <div>
            <div className="max-w-xl mx-auto my-6 p-4 bg-white shadow-md rounded-md  hover:shadow-lg transition duration-300">
               <div>
                  <img src={image} alt={name} className="w-full  object-cover rounded-md mb-4" />
                <div>
                    <h1 className="text-3xl font-bold mb-2">{name}</h1>
                    <p className="text-gray-600 mb-4">Admission Process: {admission_process}</p>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Events</h2>
                        <ul>
                        {events.map((event) => (
                            <li key={event.name} className="mb-2">
                            <strong>{event.name}</strong> - {event.description}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Research Works</h2>
                        <ul>
                        {research_works.map((research) => (
                            <li key={research.title} className="mb-2">
                            <strong>{research.title}</strong> ({research.publication_date}) - {research.description}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Sports Categories</h2>
                        <ul>
                        {sports_categories.map((category) => (
                            <li key={category.name} className="mb-2">
                            <strong>{category.name}</strong> - {category.description}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default CollegeDetails;