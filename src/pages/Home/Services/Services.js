import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

const  [services, setServices] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
}, [])

    return (
        <div className='w-10/12 mx-auto my-16'>
            <div>
            <p className="text-2xl text-center font-bold text-sky-500">Services</p>
            <h2 className="text-3xl font-semibold text-center">Our Services</h2>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, rerum. Corrupti dicta consequatur dolore ut ea quaerat. Nulla, a iusto maxime odit labore nostrum suscipit vitae. Ducimus et nobis excepturi.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;