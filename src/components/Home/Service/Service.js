import React from 'react';
import './Service.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Service = (props) => {
    const { _id, name, img, price, offer, rating } = props.service;
    return (
        <div>
            <Col>
                <Card className='nfam-animation shadow-lg p-2 bg-body rounded'>
                    <Card.Img className='img-fixed-size' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-danger'>{name}</Card.Title>
                        <Rating
                            className='text-danger'
                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-heart"
                            fullSymbol="fas fa-heart"
                        />
                        <Card.Text>
                            {offer}
                        </Card.Text>
                        <Card.Text as="h5">
                            Cost: from {price}€
                        </Card.Text>
                        <Link to={`/services/${_id}`}>
                            <Button variant='outline-danger'>Book Offer</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;