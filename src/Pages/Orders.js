import React from "react";
import AutContext from "../Storage/AutContext";

const Orders = () => {

    var carrito = React.useContext(AutContext);

    console.log('Order: '+carrito.carrito);
    return(
        <h1>ORDERS PAGE</h1>
    )
}

export default Orders;