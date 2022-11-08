import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;