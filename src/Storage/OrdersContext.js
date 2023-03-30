import React from "react";

const OrdersContext = React.createContext(
    {orders:[], setOrders:null}
)

export default OrdersContext;