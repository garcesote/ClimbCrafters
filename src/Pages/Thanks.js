// import axios from 'axios';
import styles from './Home.css';
import './Home.css'
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import LoginContext from '../Storage/LoginContext';
import AutContext from '../Storage/AutContext';

function Thanks() {

    const loginContext = useContext(LoginContext);
    const carrito = useContext(AutContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        navigate('/products')

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
                                        <h2 className="fw-bold mb-2 text-uppercase ">WE ARE GRATEFUL</h2>
                                        <p className=" mb-5">The team of ClimbCrafters wants to thank you for your order</p>
                                        <div className="mb-3">
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Check out or products if you want to make a new order
                        </Form.Label>
                                                </Form.Group>

                                                <br></br>
                                                <div className="d-grid">
                                                    <Button variant="primary" type="submit">
                                                        Make a new order
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

export default Thanks;
