import React from "react";

const LoginContext = React.createContext(
    {login:false, setLogin:null, loginData: null, setLoginData: null}
)

export default LoginContext;