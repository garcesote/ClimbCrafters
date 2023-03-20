// import axios from 'axios';
import './Home.css'
import { Button, Form, Card, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupError, setSignupError] = useState(false);

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(password);
        console.log(confirmPassword);

        if (password === confirmPassword) {
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            }
            const newTokenId = {
                idToken: ""
            }
            // Create Firebase account
            axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUpWithPassword?key=AIzaSyC6DdMR99w1znVUnEFg7WH9kxYYVyQHERw", authData)
                .then((res) => {
                    console.log(res)
                    // Create DDBB for the user
                    // axios.patch('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/test/' + email.split('.').join("") + '.json', newTokenId)
                    // .then((response) => {
                    //     console.log(response)
                    // }).catch((error) => {
                    //     console.log(error)
                    // })
                }).catch((err) => {
                    console.log(err)
                })
           

        }
        else {
            setSignupError(true);
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
                                        <h2 className="fw-bold mb-2 text-uppercase ">ClimbCrafters. New Account</h2>
                                        <p className=" mb-5">Please enter your email and password!</p>
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

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formRepeatPassword"
                                                >
                                                    <Form.Label>Repeat password</Form.Label>
                                                    <Form.Control type="password" placeholder="Repeat password" onChange={confirmPasswordHandler} />
                                                </Form.Group>
                                                <br></br>
                                                {
                                                    signupError &&
                                                    <p style={{ color: "red" }}>Passwords do not match</p>

                                                }
                                                <div className="d-grid">
                                                    <Button variant="primary" type="submit">
                                                        Create account
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

export default Signup;
