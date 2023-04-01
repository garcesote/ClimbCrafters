import React, { useState, useContext, useEffect } from "react";
import './Order.css'
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
                        <div className="product" id={product.id}>
                            <div className="productName">
                                <Image
                                    className="d-block w-80"
                                    style={{ maxHeight: '50px' }}
                                    src={product.img}
                                    alt="First slide"
                                />
                                <div>{product.nombre}  </div>
                            </div>
                            <div className="productPrice">
                                <div className="quantity"> Quantity: {product.cantidad}</div>
                                <div className="price"> Price {product.precio}$ </div>
                            </div>

                        </div>
                    )
                })
            }
            <div className="productDetails">
                <h3 style={{"color": "black"}}>Order price: {orderPrice} $</h3>
            </div>
        </>
    )
}

export default Order;