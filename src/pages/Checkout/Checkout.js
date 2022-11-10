import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';
import moment from 'moment';
import toast from 'react-hot-toast';
import AllReviews from '../Reviews/AllReviews';

const Checkout = () => {

    const { _id, title, img, price, artiest, description} = useLoaderData();
    const {user} = useContext(AuthContext);
    useTitle('Service-Details');

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const feedback = form.feedback.value;
        const time = `${moment().format('Do MMM YY, h:mm')}`

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            time : time,
            rating,
            feedback
        }

        // if(rating.length <= 5){
        //     alert('rating number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('https://art-masters-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('art-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Successfully Provide Feedback')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='grid grid-cols-2'>
        <section className="max-w-4xl p-6 my-16 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handlePlaceReview}>
            <div>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">{title}</h2>
            <h3 className='text-md text-sky-500'>Artiest Name: {artiest}</h3>
            <p>{description}</p>
            <h4 className='mb-10 text-md text-fuchsia-600'>Price: ${price}</h4>
            </div>
            </div>
        <div className='bg-fuchsia-100 px-10 py-10'>
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Give Your Valuable review:</h2>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">First Name</label>
                    <input name="firstName" type="text" placeholder="First Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Last Name</label>
                    <input name="lastName" type="text" placeholder="Last Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200">Your Rating</label>
                    <input name="rating" type="number" placeholder="Your Rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Your Email Address</label>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                </div>
            </div>
            <div className='mt-6'>
                <label className="text-gray-700 dark:text-gray-200">Your Feedback</label>
                <textarea name="feedback" className="textarea block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Your feedback"></textarea>
            </div>

            <div className="flex justify-end mt-6">
                <input className='btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' type="submit" value="Give Your Review" />
            </div>
        </div>
        </form>
        </section>
        <section className="max-w-4xl p-6 my-16 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <AllReviews></AllReviews>
        </section>
        </div>
    );
};

export default Checkout;