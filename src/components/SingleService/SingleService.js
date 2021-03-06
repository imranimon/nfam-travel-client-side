import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import useSwal from '../../hooks/useSwal';

const SingleService = () => {
    const { swalReturnSuccess } = useSwal();
    const { user } = useAuth();
    const { _id } = useParams()
    const history = useHistory();
    const [selectedService, setSelectedService] = useState({})
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        axios.get(`https://blooming-stream-09480.herokuapp.com/services/${_id}`)
            .then(response => {
                setSelectedService(response.data);
                setValue('name', `${user.displayName}`);
                setValue('email', `${user.email}`);
                setValue('cost', `${response.data.price}`);
                setValue('place', `${response.data.name}`);
            })
    }, [])

    const onMakeBooking = (data) => {
        data.status = 'Pending'
        console.log(data)
        axios.post('https://blooming-stream-09480.herokuapp.com/order', data)
            .then(response => {
                reset();
                swalReturnSuccess('Order Successful').then(() => {
                    history.push('/my-orders')
                })

            })
    }
    return (
        <div className="container mt-5 mb-5">
            <Row xs={1} md={2} className='shadow-lg p-2 bg-body rounded'>
                <Col>
                    <Card>
                        <Card.Img className='img-fixed-size' variant="top" src={selectedService.img} />
                        <Card.Body>
                            <Card.Title className='text-danger'>{selectedService.name}</Card.Title>
                            <Rating
                                className='text-danger'
                                initialRating={selectedService.rating}
                                readonly
                                emptySymbol="far fa-heart"
                                fullSymbol="fas fa-heart"
                            />
                            <Card.Text>
                                {selectedService.offer}
                            </Card.Text>
                            <Card.Text as="h5">
                                Cost: from {selectedService.price}???
                            </Card.Text>
                            <Card.Text>
                                {selectedService.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <form onSubmit={handleSubmit(onMakeBooking)}>
                        <div className="mb-3 row">
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="place" className="form-label">Selected Place</label>
                                <input {...register("place", { required: true })} disabled
                                    type="text" className="form-control" id="place" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="cost" className="form-label">Cost ???</label>
                                <input {...register("cost", { required: true })} disabled
                                    type="text" className="form-control" id="cost" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input {...register("name", { required: true })}
                                type="text" className="form-control" id="name" />
                            {errors.name && <span className='text-danger'>Name is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input {...register("email", { required: true })}
                                type="email" className="form-control" id="email" />
                            {errors.email && <span className='text-danger'>Email is required</span>}
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-12 col-md-6 col-lg-4 ">
                                <label htmlFor="street" className="form-label">Street/House No.</label>
                                <input {...register("street", { required: true })}
                                    type="text" className="form-control" id="street" />
                                {errors.street && <span className='text-danger'>Street/House No is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 ">
                                <label htmlFor="city" className="form-label">City</label>
                                <input {...register("city", { required: true })}
                                    type="text" className="form-control" id="city" />
                                {errors.city && <span className='text-danger'>City is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 ">
                                <label htmlFor="zip" className="form-label">Post Code</label>
                                <input {...register("zip", { required: true })}
                                    type="number" className="form-control" id="zip" />
                                {errors.zip && <span className='text-danger'>Post Code is required</span>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="startDate" className="form-label">Outward Journey</label>
                                <input {...register("startDate", { required: true })}
                                    type="date" className="form-control" id="startDate" />
                                {errors.startDate && <span className='text-danger'>Outward Journey is required</span>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="endDate" className="form-label">Return Trip</label>
                                <input {...register("endDate", { required: true })}
                                    type="date" className="form-control" id="endDate" />
                                {errors.endDate && <span className='text-danger'>Return Trip is required</span>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <input className='btn btn-outline-danger' type="submit" value="Book Now" />
                        </div>
                    </form>
                </Col>
            </Row>

        </div>
    );
};

export default SingleService;