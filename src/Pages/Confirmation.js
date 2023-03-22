import React, { useState, useContext } from "react";
import LoginContext from "../Storage/LoginContext";
import AutContext from "../Storage/AutContext";
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Order from '../Components/Order';

const Confirmation = () => {

    const autContext = useContext(AutContext);
    const loginContext = useContext(LoginContext);
    const carritoOrder = autContext.carritoData;


    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">ORDER CONFIRMATION</h2>
                                    <p className=" mb-5">Check the details of your order </p>
                                    <div className="mb-3">
                                        <Order data={carritoOrder}></Order>
                                        <div className="mt-3">
                                            <Link to="/">
                                                <Button variant="primary" type="submit">
                                                    Confirm order
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Confirmation;