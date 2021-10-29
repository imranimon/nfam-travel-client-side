import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="text-center p-5 d-flex justify-content-center">
            <div>
                <Row className="w-100">
                    <img className="img-fluid" src="https://i.ibb.co/72cH1qR/Unternehmen-Mann-Schirm-1260x300.jpg" alt="" />
                </Row>
                <Row className="mt-3">
                    <h1>
                        <span className="border-bottom border-2 border-danger text-danger">
                            ABOUT US
                        </span>
                    </h1>
                </Row>
                <Row className="mt-2 w-100" xs={1} md={2}>
                    <Col>
                        <p>
                            NFam Travel is the central internet portal of over 500 travel agencies in Germany. Here we bundle the knowledge of our around 2,000 travel experts for you in a unique way in order to provide you with the best possible advice both on the Internet and in NFam Travel agencies across Germany.
                        </p>
                        <p>
                            Whether a spontaneous short trip or dream trip, hiking trip, club holiday or cruise, at NFam Travel you will always find the right offer or a travel expert who knows your dream destination personally and who will help you to have an unforgettable holiday with insider knowledge.
                        </p>
                        <p>
                            You have the choice, book online now at NFam Travel or be inspired by our recommendations and then book in one of our more than 500 travel agencies. Your personal travel expert will be happy to send you an offer after the personal consultation.
                        </p>
                        <p>
                            Your advantage: In this case, your travel expert from your NFam Travel remains your personal contact.
                        </p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src="https://i.ibb.co/k2qgzPB/erwachsenenhotels-580x440.jpg" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;