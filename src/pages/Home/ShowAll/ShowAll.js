import React, { useContext, useEffect, useState } from 'react';
import ShowAllCard from './ShowAllCard';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Audio } from 'react-loader-spinner';

const ShowAll = () => {
    const  [services, setServices] = useState([]);
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://art-masters-server.vercel.app/allservice')
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
                <p className="text-2xl text-center font-bold text-sky-500">All Services</p>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, rerum. Corrupti dicta consequatur dolore ut ea quaerat. Nulla, a iusto maxime odit labore nostrum suscipit vitae. Ducimus et nobis excepturi.</p>
                </div>
                <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    services.map(service => <ShowAllCard
                        key={service._id}
                        service={service}
                    >
                    </ShowAllCard>)
                }
                </div>
            </div>
        );
    };
export default ShowAll;