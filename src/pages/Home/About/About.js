import React from 'react';
import image1 from '../../../assets/banner/13.png'
import image2 from '../../../assets/banner/12.png'

const About = () => {
    return (
        <div className="hero w-10/12 mx-auto my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='w-1/2 relative'>
            <img src={image1} className="w-96 rounded-lg shadow-2xl ml-auto" alt='' />
            <img src={image2} className="absolute left-16 top-36 w-3/5 rounded-md shadow-2xl border-8 border-fuchsia-100" alt='' />
            </div>
            <div className='w-1/2'>
            <p className='text-2xl font-bold text-sky-500 my-4'>About Us</p>
            <h1 className="text-5xl font-bold my-4">
                Art Masters Given! <br />
                We are qualified <br />
                That is aswome
                </h1>
            <p className="my-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-gray">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default About;