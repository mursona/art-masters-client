import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiTwotoneEdit } from 'react-icons/ai';

const ReviewTable = ({review, handleDelete, handleStatusUpdate}) => {

    const { _id, serviceName, rating, customer, price, service, feedback } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://art-masters-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'> <RiDeleteBin5Fill className='text-4xl font-bold'></RiDeleteBin5Fill></button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                            {
                                reviewService?.img && 
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </div>
        </td>
        <td>
                <div>{serviceName}</div>
                <span className="badge badge-ghost badge-sm">Price: ${price}</span>
        </td>
        <td>
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">Rating: {rating}</div>
                </div>
        </td>
        <th>
            <button 
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs">{feedback ? feedback : 'pending'}</button>
        </th>
        <th>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn"><AiTwotoneEdit></AiTwotoneEdit></label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Your Feedback</h3>
                <p className="py-4"><textarea className='bg-fuchsia-100 w-full'></textarea></p>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-outline btn-gray">Update</label>
                </div>
            </div>
            </div>
        </th>
    </tr>
    );
};

export default ReviewTable;