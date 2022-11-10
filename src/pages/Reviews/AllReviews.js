import React, { useEffect, useState } from 'react';
import ReviewTable from './ReviewTable';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://art-masters-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
            <div className="overflow-x-auto w-full">
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
                            >
                            </ReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default AllReviews;