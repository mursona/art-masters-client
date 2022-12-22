import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
                    Art <br />
                    Master's
                </h1>
            </div>
            <div className="absolute flex justify-start left-12 top-40 w-1/2">
                <p className='text-fuchsia-100'>Painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface.</p>
            </div>
            <div className="absolute flex justify-start left-12 top-80 w-1/2">
            <Link to='/signup' className="btn btn-outline bg-fuchsia-100 mr-4">Get Started</Link>
            <Link to='/about' className="btn btn-outline border border-fuchsia-100 text-fuchsia-100">About Us</Link>
            </div>
            <div className="absolute flex justify-end right-12 top-80">
            <a href={`#slide${prev}`} className="text-fuchsia-100 text-4xl mx-4"><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></a> 
            <a href={`#slide${next}`} className="text-fuchsia-100 text-4xl"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></a>
            </div>
        </div> 
    );
};

export default BannerItem;