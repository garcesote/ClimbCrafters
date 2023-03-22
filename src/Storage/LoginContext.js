import React from "react";

const LoginContext = React.createContext(
    {login:false, setLogin:null, loginData: null, setLoginData: null, email: "", setEmail: null}
)

export default LoginContext;