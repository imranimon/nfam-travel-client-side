import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Recommendations.css'

const Recommendations = () => {
    return (
        <div className="container mt-5 mb-3">
            <Row className="text-center text-danger border-bottom border-2 border-danger">
                <h2>OUR LAST-MINUTE RECOMMENDATIONS</h2>
            </Row>
            <Row className="shadow-lg p-2 bg-body rounded mt-2" xs={1} md={2}>
                <Col className="border border-success p-2 rounded">
                    <Row className="g-2" xs={1} md={2}>
                        <Col>
                            <img className="img-fluid rounded-start" src="https://i.ibb.co/k5FRRc8/Autoferien-288x440.jpg" alt="" />
                        </Col>
                        <Col>
                            <p className="text-danger fs-5">ROAD TRIPS</p>
                            <div className="border-bottom border-success mb-2">
                                <p><span className="fw-bold">ITALY</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 41€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                            <div className="border-bottom border-success mb-2">
                                <p><span className="fw-bold">AUSTRIA</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 105€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                            <div>
                                <p><span className="fw-bold">NETHERLANDS</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 66€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="border border-success p-2 rounded" >
                    <Row className="g-2" xs={1} md={2}>
                        <Col>
                            <img className="img-fluid rounded-start" src="https://i.ibb.co/bmGxVXF/Last-Minute-Sale-288x440.jpg" alt="" />
                        </Col>
                        <Col>
                            <p className="text-danger fs-5">AIR TRAVEL</p>
                            <div className="border-bottom border-success mb-2">
                                <p><span className="fw-bold">SPAIN</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 349€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                            <div className="border-bottom border-success mb-2">
                                <p><span className="fw-bold">Switzerland</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 405€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                            <div>
                                <p><span className="fw-bold">Paris</span><br />1 week</p>
                                <div className="d-flex">
                                    <p>from 299€</p>
                                    <Link to="#" className="ms-5 text-danger">ABOUT THE OFFER</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Recommendations;