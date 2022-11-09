import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ShowAllCard = ({service}) => {
    const {_id, img, price, title} = service;

    return (
        <div className="card flex flex-col items-center justify-center w-full max-w-sm mx-auto bg-white">
        <div className="card-body">
            <h2 className="card-title">
            {title}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            {/* image react photo viewer */}
            <PhotoProvider speed={() => 800}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
            <PhotoView src={img}>
            <img src={img} alt="" />
            </PhotoView>
            </PhotoProvider>

            <div class="bg-fuchsia-100 px-4 flex items-center justify-between py-2 dark:bg-gray-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">Charge: ${price}</span>
            <Link  class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" to={`/checkout/${_id}`}> See More </Link>
        </div>
        </div>
        </div>
    );
};

export default ShowAllCard;