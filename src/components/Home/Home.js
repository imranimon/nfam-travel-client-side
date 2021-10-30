import React from 'react';
import Banner from './Banner/Banner';
import Recommendations from './Recommendations/Recommendations';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="top">
            <Banner></Banner>
            <Services></Services>
            <Recommendations></Recommendations>
        </div>
    );
};

export default Home;