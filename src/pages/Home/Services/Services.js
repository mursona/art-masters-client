import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Audio } from 'react-loader-spinner';

const Services = () => {

const  [services, setServices] = useState([]);
const {loading} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://art-masters-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    if(loading){
        return <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    }


    return (
        <div className='w-10/12 mx-auto my-16'>
            <div>
            <p className="text-2xl text-center font-bold text-sky-500">Services</p>
            <h2 className="text-3xl font-semibold text-center">Our Services</h2>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, rerum. Corrupti dicta consequatur dolore ut ea quaerat. Nulla, a iusto maxime odit labore nostrum suscipit vitae. Ducimus et nobis excepturi.</p>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
            }
            </div>
            <div className='text-center mx-auto'>
            <Link to='/showall' className='px-4 py-1 text-md font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'> Show All </Link>
            </div>
        </div>
    );
};

export default Services;