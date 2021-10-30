import React from 'react';
import { Row } from 'react-bootstrap';
import './Recommendations.css'

const Recommendations = () => {
    return (
        <div className="container mt-5 mb-3">
            <Row className="text-center text-danger border-bottom border-2 border-danger">
                <h2>OUR LAST-MINUTE RECOMMENDATIONS</h2>
            </Row>
            
        </div>
    );
};

export default Recommendations;