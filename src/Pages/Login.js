// import axios from 'axios';
import styles from './Home.css';
import './Home.css'
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {

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
                                        <p className=" mb-5">Please enter your login and password!</p>
                                        <div className="mb-3">
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                        </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                                <br></br>
                                                <div className="d-grid">
                                                    <Button variant="primary" type="submit">
                                                        Login
                        </Button>
                                                </div>
                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Don't have an account?
                                                    <Link to="/signup" className="text-primary fw-bold">
                                                        Sign Up
                                                    </Link>
                                                </p>
                                        </div>
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

export default Login;
