import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import useSwal from '../../../hooks/useSwal';

const AllOrders = () => {
    const { swalConfirmation, swalSuccess } = useSwal();
    const [orders, setOrders] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);
    const [modifiedCount, setModifiedCount] = useState(0);
    useEffect(() => {
        axios.get(`https://blooming-stream-09480.herokuapp.com/orders`)
            .then(response => { setOrders(response.data) })
    }, [deleteCount, modifiedCount])

    const onCancelOrder = _id => {
        swalConfirmation("delete", "You won't be able to revert this!")
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://blooming-stream-09480.herokuapp.com/orders/${_id}`)
                        .then(response => {
                            setDeleteCount(deleteCount + 1)
                            swalSuccess('Order Deleted')
                        })
                }
            })

    }

    const onAcceptOrder = _id => {
        swalConfirmation('accept')
            .then(result => {
                if (result.isConfirmed) {
                    const data = {
                        status: 'Accepted'
                    }
                    axios.post(`https://blooming-stream-09480.herokuapp.com/order/${_id}`, data)
                        .then(response => {
                            setModifiedCount(modifiedCount + 1)
                            swalSuccess('Order Accepted')
                        })
                }
            })
    }
    return (
        <div className="container mt-3 mb-3 shadow-lg p-2 bg-body rounded">
            <h2 className="text-danger text-center"><span className="border-bottom border-2 border-danger">
                List Of All Available Orders</span>
            </h2>
            <div className="overflow-auto">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Place</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <tr
                                key={order._id}
                            >
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.place}</td>
                                <td>{order.cost}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button onClick={() => { onCancelOrder(order._id) }} className='btn btn-sm btn-outline-danger m-2'>
                                        Delete
                                    </button>
                                    <button disabled={order.status === 'Accepted' ? true : false}
                                        onClick={() => { onAcceptOrder(order._id) }} className='btn btn-sm btn-outline-success m-2'>
                                        Accept
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </Table>
            </div>

        </div>
    );
};

export default AllOrders;