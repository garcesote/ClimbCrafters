import React from "react";

const OrdersContext = React.createContext(
    {orders:[], setOrders:null, reload: false, setReload: null}
)

export default OrdersContext;