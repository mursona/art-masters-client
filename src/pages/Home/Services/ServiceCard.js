import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

const {_id, img, price, title} = service;

    return (
        <div className="card mx-10 my-6 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {title}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Service Charge: ${price}</div> 
            <Link to={`/checkout/${_id}`} className="btn btn-outline">See Now</Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;