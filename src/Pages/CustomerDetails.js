// import axios from 'axios';
import styles from './Home.css';
import './Home.css'
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import LoginContext from '../Storage/LoginContext';
import AutContext from '../Storage/AutContext';

function CustomerDetails() {

    const [customerUser, setCustomerUser] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [error, setError] = useState(false);
    const loginContext = useContext(LoginContext);
    const carrito = useContext(AutContext);
    const navigate = useNavigate();

    const customerUserHandler = (event) => {
        setCustomerUser(event.target.value)
    }
    const customerAddressHandler = (event) => {
        setCustomerAddress(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault();

        if (customerUser.length > 0 && customerAddress.length > 0) {
            const pedido = {
                details: { name: customerUser, address: customerAddress },
                products: carrito.carritoData
            }

            // Guardar pedido en la base de datos
            axios.post('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/' + loginContext.email + '/pedidos.json', pedido)
                .then((response) => {

                    // Borrar carrito, tanto del contexto como de la BBDD
                    axios.delete('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/' + loginContext.email + '/carrito.json')
                        .then((response) => {
                            carrito.setCarritoData([])

                            // TODO: Hacer petición a la BBDD o añadir un nuevo pedido al estado
                        }).catch((error) => {
                            console.log(error)
                        })


                }).catch((error) => {
                    console.log(error)
                })
            navigate('/orders')
        }
        else {
            setError(true)
        }

    }

    return (
        <>
            <div>
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">ClimbCrafters</h2>
                                        <p className=" mb-5">Please enter your address</p>
                                        <div className="mb-3">
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Name & Surname
                        </Form.Label>
                                                    <Form.Control type="text" placeholder="Name & Surname" onChange={customerUserHandler} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Address
                        </Form.Label>
                                                    <Form.Control type="text" placeholder="Address" onChange={customerAddressHandler} />
                                                </Form.Group>

                                                <br></br>
                                                {
                                                    error &&
                                                    <p style={{ color: "red" }}>Introduce your details please...</p>

                                                }
                                                <div className="d-grid">
                                                    <Button variant="primary" type="submit">
                                                        Confirm
                        </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default CustomerDetails;
