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
    const [loginError, setLoginError] = useState(false);

    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);

        // login
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6DdMR99w1znVUnEFg7WH9kxYYVyQHERw", authData)
            .then((response) => {
                console.log(response);
                if (response.data.registered) {
                    loginContext.setLogin(true)
                    localStorage.setItem("idToken", response.data.idToken)

                    const newTokenId = {
                        idToken: response.data.idToken
                    }

                    // Guardar token de inicio de sesión en la base de datos
                    axios.patch('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/' + response.data.email.split('.').join("") + '.json', newTokenId)
                        .then((response) => {
                            console.log(response)
                        }).catch((error) => {
                            console.log(error)
                        })
                    navigate('/products')
                }
            }).catch((error) => {
                setLoginError(true);
                console.log(error)
            })


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
                                                    <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" onChange={passwordHandler} />
                                                </Form.Group>
                                                <br></br>
                                                {
                                                    loginError &&
                                                    <p style={{ color: "red" }}>Login error, please try again...</p>

                                                }
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
