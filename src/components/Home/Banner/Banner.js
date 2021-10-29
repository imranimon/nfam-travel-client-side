import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XJzTV5y/Herostage-Einreisebestimmungen-1260x400px.jpg"
                        alt="covid test info"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-danger text-white">SEE CORONA TRAVEL RESTRICTION</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/rs7qYDy/Herostage-Fernreisen-1260x400px.jpg"
                        alt="man standing on a sea beach"
                    />

                    <Carousel.Caption >
                        <h3 className="bg-danger text-white">FINALLY TRAVELING AGAIN</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;