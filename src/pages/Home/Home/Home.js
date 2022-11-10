import React from 'react';
import useTitle from '../../../hook/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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