import React from "react";

const AutContext = React.createContext(
    {carrito:false, set:null, carritoData:[], setCarritoData:null}
)

export default AutContext;