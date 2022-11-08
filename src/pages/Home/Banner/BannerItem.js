import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './Banner.css';

const BannerItem = ({slide}) => {

    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image rounded-md'>
            <img src={image} className="rounded-md" alt='' />
            </div>
            <div className="absolute flex justify-start left-12 top-10">
                <h1 className='text-5xl font-bold text-fuchsia-100'>
                    hello <br />
                    world <br />
                    serving
                </h1>
            </div>
            <div className="absolute flex justify-start left-12 top-52 w-1/2">
                <p className='text-fuchsia-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam deserunt! Magni, necessitatibus vel molestias totam modi mollitia incidunt corrupti fugiat odio. Inventore vero error alias voluptatum similique labore aperiam.</p>
            </div>
            <div className="absolute flex justify-start left-12 top-80 w-1/2">
            <button className="btn btn-outline bg-fuchsia-100 mr-4">Get Started</button>
            <button className="btn btn-outline border border-fuchsia-100 text-fuchsia-100">About Us</button>
            </div>
            <div className="absolute flex justify-end right-12 top-80">
            <a href={`#slide${prev}`} className="text-fuchsia-100 text-4xl mx-4"><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></a> 
            <a href={`#slide${next}`} className="text-fuchsia-100 text-4xl"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></a>
            </div>
        </div> 
    );
};

export default BannerItem;