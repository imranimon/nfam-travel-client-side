import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import './Services.css'
import Service from '../Service/Service';
import useSwal from '../../../hooks/useSwal'

const Services = () => {
    const { startLoading, stopLoading } = useSwal();
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        axios.get('https://blooming-stream-09480.herokuapp.com/services')
            .then(response => {
                setServices(response.data)
                setDataLoading(false)
            })
    }, [])
    return (
        <div className="container mt-3 mb-3">
            {
                dataLoading ? startLoading('Offers Loading') : stopLoading()
            }
            <Row className="text-center text-danger border-bottom border-2 border-danger">
                <h2>LET'S TRAVEL AROUND THE WORLD</h2>
            </Row>
            <Row className="mt-3 g-4" xs={1} md={3} lg={4}>
                <Col>
                    <Card className='shadow-lg p-2 bg-body rounded'>
                        <Card.Body>
                            <ListGroup as="ul" >
                                <ListGroup.Item as="li" >
                                    An entry form has to be filled out by everyone and printed out twice
                                </ListGroup.Item>
                                <ListGroup.Item as="li" >
                                    All travelers from 12 years of age require a negative PCR test (max. 72 hours old) to enter the country.
                                </ListGroup.Item>
                                <ListGroup.Item as="li" >
                                    Unvaccinated travelers are obliged to quarantine for seven days in special quarantine hotels with a subsequent PCR test
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;