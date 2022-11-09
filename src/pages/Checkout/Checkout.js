import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {

    const { _id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const feedback = form.feedback.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            rating,
            feedback
        }

        // if(rating.length <= 5){
        //     alert('rating number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review posted successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
            <section class="max-w-4xl p-6 my-16 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form onSubmit={handlePlaceReview}>
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">You are about to review: {title}</h2>
                <h3>Price: ${price}</h3>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200">First Name</label>
                            <input name="firstName" type="text" placeholder="First Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200">Last Name</label>
                            <input name="lastName" type="text" placeholder="Last Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200">Your Rating</label>
                            <input name="rating" type="number" placeholder="Your Rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200">Your Email Address</label>
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label class="text-gray-700 dark:text-gray-200">Your Feedback</label>
                        <textarea name="feedback" className="textarea block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Your feedback" required></textarea>
                    </div>

                    <div class="flex justify-end mt-6">
                        <input className='btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' type="submit" value="Give Your Review" />
                    </div>
                </form>
            </section>
    );
};

export default Checkout;