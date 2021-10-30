import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useSwal from '../../hooks/useSwal';
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const AddService = () => {
    const { swalSuccess, startLoading, stopLoading } = useSwal();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onCreateNewService = (serviceData) => {
        startLoading('Adding New Service')
        const imgData = new FormData();
        imgData.append("file", serviceData.img[0])
        imgData.append("upload_preset", "imranimon")
        imgData.append("cloud_name", "dwqqql7tm")
        axios.post('https://api.cloudinary.com/v1_1/dwqqql7tm/image/upload', imgData)
            .then(response => {
                serviceData.img = response.data.secure_url
                axios.post('https://blooming-stream-09480.herokuapp.com/services', serviceData)
                    .then(response => {
                        reset();
                        swalSuccess('New Service Added')
                        history.push('/home')
                    })
            }).finally(() => {
                stopLoading()
            })
    }
    return (
        <div className="container mt-3 mb-3">
            <Row xs={1} md={2} className='shadow-lg p-2 bg-body rounded'>
                <Col className="img-col-bg">
                    <div>
                        <h3 className="text-center text-danger mt-5">ADD NEW SERVICE</h3>
                        <img className='img-fluid rounded' src="https://i.ibb.co/sy6k1kK/v660-mon-04-travelbadge-min.jpg" alt="" />
                    </div>
                </Col>
                <Col>
                    <form onSubmit={handleSubmit(onCreateNewService)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input {...register("name", { required: true })}
                                type="text" className="form-control" id="name" />
                            {errors.name && <span className='text-danger'>Name is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Cost €</label>
                            <input {...register("price", { required: true })}
                                type="number" className="form-control" id="price" />
                            {errors.price && <span className='text-danger'>Cost is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="offer" className="form-label">Offer</label>
                            <input {...register("offer", { required: true, maxLength: 35 })} placeholder="ex: 7 days, including flight etc."
                                type="text" className="form-control" id="offer" />
                            {errors.offer && <span className='text-danger'>Offer is required and maximum 35 characters are allowed</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Initial Rating</label>
                            <input {...register("rating", { required: true, min: 0, max: 5 })}
                                type="number" className="form-control" id="rating" />
                            {errors.rating && <span className='text-danger'>Initial Rating is required and must be between 0 and 5</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img" className="form-label">Image</label>
                            <input {...register("img", { required: true })}
                                type="file" className="form-control" id="img" />
                            {errors.img && <span className='text-danger'>Image is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Short Description</label>
                            <textarea {...register("description", { required: true })}
                                className="form-control" id="description" rows="3"></textarea>
                            {errors.description && <span className='text-danger'>Description is required</span>}
                        </div>
                        <div className="mb-3">
                            <input className='btn btn-outline-danger' type="submit" />
                        </div>
                    </form>
                </Col>
            </Row>

        </div>
    );
};

export default AddService;