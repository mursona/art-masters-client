import React, { useEffect, useState } from 'react';

const ServiceReview = ({review}) => {
    const { serviceName, rating, customer, service, feedback } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://art-masters-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
        <td>
            {reviewService?.serviceName}
                <div>{serviceName}</div>
        </td>
        <td>
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">Rating: {rating}</div>
                    <div className="text-sm opacity-50">Feedback: {feedback}</div>
                </div>
        </td>
    </tr>
    );
};
export default ServiceReview;