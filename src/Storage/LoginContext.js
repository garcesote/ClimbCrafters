import React from "react";

const LoginContext = React.createContext(
    {login:null, setLogin:null, loginData: null, setLoginData: null, email: "", setEmail: null}
)

export default LoginContext;