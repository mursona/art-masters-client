import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';
import ServiceReview from './ServiceReview';
const AllReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Review');

    useEffect(() => {
        fetch(`https://art-masters-server.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('art-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => {
            setReviews(data);
        })
        }, [user?.email, logOut])

    return (
        <div>
                    <p className='text-3xl text-center text-sky-500 my-16'>Service Reviews</p>
                    <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Reviewer Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ServiceReview
                                    key={review._id}
                                    review={review}
                                ></ServiceReview>)
                            }
                        </tbody>
                    </table>
                    </div>
        </div>
    );
};

export default AllReviews;