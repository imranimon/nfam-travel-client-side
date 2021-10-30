import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useSwal from '../../../hooks/useSwal';

const MyOrders = () => {
    const { swalConfirmation, swalSuccess } = useSwal();
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);
    useEffect(() => {
        axios.get(`https://blooming-stream-09480.herokuapp.com/orders/${user.email}`)
            .then(response => { setOrders(response.data) })
    }, [user, deleteCount])

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
    return (
        <div className="container mt-3 mb-3 shadow-lg p-2 bg-body rounded">
            <h2 className="text-center text-danger"><span className="border-bottom border-2 border-danger">
                List Of Your Orders</span>
            </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
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
                            <td>{order.place}</td>
                            <td>{order.cost} €</td>
                            <td className={order.status === 'Accepted' ? 'text-success' : 'text-danger'}>
                                {order.status}
                            </td>
                            <td>
                                <button onClick={() => { onCancelOrder(order._id) }} className='btn btn-sm btn-outline-danger'
                                    disabled={order.status === 'Accepted' ? true : false}>
                                    Delete
                                </button>

                            </td>
                        </tr>)
                    }
                </tbody>


            </Table>
        </div >
    );
};

export default MyOrders;