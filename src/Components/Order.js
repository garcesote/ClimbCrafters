import React, { useState, useContext, useEffect } from "react";
import styles from './Order.css'
import LoginContext from "../Storage/LoginContext";
import AutContext from "../Storage/AutContext";
import { Button, Form, Card, Row, Col, Container, Image } from 'react-bootstrap';

const Order = ({ data }) => {

    const autContext = useContext(AutContext);
    const loginContext = useContext(LoginContext);
    const [orderPrice, setOrderPrice] = useState(0);
    //console.log(data)

    useEffect(() => {
        let price = 0;
        data.map((product) => {
            price += product.cantidad * product.precio
        })
        setOrderPrice(price)
    }, [])
    

    return (
        <>
            {
                data.map((product) => {
                    return (
                        <div className="product">
                            <div className="productName">
                                <Image
                                    className="d-block w-80"
                                    style={{ maxHeight: '50px' }}
                                    src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"
                                    alt="First slide"
                                />
                                <div>{product.nombre}  </div>
                            </div>
                            <div className="productPrice">
                                <div className="quantity"> {product.cantidad}</div>
                                <div className="price"> {product.precio}$ </div>
                            </div>

                        </div>
                    )
                })
            }
            <div className="productDetails">
                <h3>Order price: {orderPrice} $</h3>
            </div>
        </>
    )
}

export default Order;