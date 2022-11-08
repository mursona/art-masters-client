import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-fuchsia-100 px-12 py-4 drop-shadow-md'>
            <footer className="footer p-10 text-base-content">
            <div>
                <span className="footer-title">Services</span> 
                <Link className="link link-hover">Branding</Link> 
                <Link className="link link-hover">Design</Link> 
                <Link className="link link-hover">Marketing</Link> 
                <Link className="link link-hover">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link className="link link-hover">About us</Link> 
                <Link className="link link-hover">Contact</Link> 
                <Link className="link link-hover">Jobs</Link> 
                <Link className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link className="link link-hover">Terms of use</Link> 
                <Link className="link link-hover">Privacy policy</Link> 
                <Link className="link link-hover">Cookie policy</Link>
            </div>
            </footer> 
            <footer className="footer px-12 py-4 border-t text-base-content border-base-300">
            <div className="items-center grid-flow-col">
            <img src={logo} alt="logo"/>
                <p>Art Master's Ltd. <br/>Providing reliable art since 2022</p>
            </div> 
            <div className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4 text-gray-700">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;