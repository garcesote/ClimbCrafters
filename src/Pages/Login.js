// import axios from 'axios';
import styles from './Home.css';
import './Home.css'
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../Storage/LoginContext';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);

        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6DdMR99w1znVUnEFg7WH9kxYYVyQHERw", authData)
            .then((response) => {
                console.log(response);
                if (response.data.registered) {
                    loginContext.setLogin(true)
                    // axios.put("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+ response.data.email + "/idToken/idToken.json", {idToken: response.data.idToken})
                    //     .then((res) => {
                    //         console.log(res)
                    //     }).catch((err) => {
                    //         console.log(err)
                    //     })
                    navigate('/products')
                }
            }).catch((error) => {
                console.log(error)
            })
        

    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
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
                                        <p className=" mb-5">Please enter your login and password!</p>
                                        <div className="mb-3">
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                        </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" onChange={emailHandler}/>
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" onChange={passwordHandler} />
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
