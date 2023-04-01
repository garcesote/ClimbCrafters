import React, { useContext } from 'react';
import './OrderItem.css';
import { Link, Navigate } from 'react-router-dom';
import LoginContext from '../Storage/LoginContext';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import OrdersContext from '../Storage/OrdersContext';
import { Col, Container, Row } from "react-bootstrap";


const OrderItem = ({ orderId, name, products, date, address }) => {

    //TODO: Eliminar order
    // Delete order from context and database
    const loginContext = useContext(LoginContext);
    const ordersContext = useContext(OrdersContext);

    const handleDeleteOrder = () => {
        if (window.confirm('Are you sure you want to delete the item?')) {
            axios.delete("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email + "/pedidos/" + orderId + ".json")
                .then((response) => {
                    console.log(response)
                    ordersContext.setReload(!ordersContext.reload)
                }).catch((error) => {
                    console.log(error)
                })
        } else {

        }

    }

    return (
        // <div className="order">
        //     <Link to={`/order-details/${orderId}`}>
        //         <div>
        //             <p>{date} </p>
        //             <p>{name} </p>
        //             <p>{products}</p>
        //         </div>
        //     </Link>
        // </div>
        <Container className="orderItem">
            <Link to={`/order-details/${orderId}`} style={{"text-decoration": "none", "color": "black"}}>
                <Row className="row">
                    <Col sm className="col">{date}</Col>
                    <Col sm className="col">Delivered to: {name} at {address}</Col>
                    <Col sm className="col">Products: {products}</Col>
                    <Col sm className="col"><Button onClick={handleDeleteOrder}>X</Button></Col>
                </Row>
            </Link>
        </Container>

    )
}

export default OrderItem