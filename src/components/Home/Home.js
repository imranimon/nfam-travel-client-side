import React from 'react';
import Banner from './Banner/Banner';
import Recommendations from './Recommendations/Recommendations';
import Newsletter from './Newsletter/Newsletter';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="top">
            <Banner></Banner>
            <Services></Services>
            <Recommendations></Recommendations>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;