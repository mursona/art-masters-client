import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';
import ReviewTable from './ReviewTable';

const Reviews = () => {

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

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if(proceed){
            fetch(`https://art-masters-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('art-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://art-masters-server.vercel.app/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('art-token')}`
            },
            body: JSON.stringify({feedback: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(odr => odr._id !== id);
                const approving = reviews.find(odr => odr._id === id);
                approving.feedback = 'Approved'

                const newReviews = [approving, ...remaining];
                setReviews(newReviews);
            }
        })
    }

    return (
        <div>
                {     
                    (reviews.length === 0) ? <p>No Review Submitted</p> 
                    : 
                    <>
                    <div className="overflow-x-auto w-full">
                    You have Reviews
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewTable
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleStatusUpdate={handleStatusUpdate}
                                >
                                </ReviewTable>)
                            }
                        </tbody>
                    </table>
                    </div>
                    </>
                }
        </div>
    );
};

export default Reviews;