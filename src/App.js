import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import AutContext from './Storage/AutContext';
import LoginContext from './Storage/LoginContext';
import { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carrito from './Components/Carrito';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  const [carrito, setCarrito] = useState(false);
  const [login, setLogin] = useState();
  const [loginData, setLoginData] = useState();
  const loginContext = useContext(LoginContext);

  const carritoComponent = (
    <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position: 'fixed', right: '0px' }}>
      <Carrito></Carrito>
    </Col>
  )

  // Comprobar si hay una sesión iniciada al abrir el navegador
  useEffect(() => {

    const localIdToken = localStorage.getItem("idToken");
    console.log(localIdToken)
    if (localIdToken) {
      console.log("Session detected, trying to login automatically...")
      console.log(localIdToken)

      // Buscar en la BBDD un idToken igual al que hay guardado en el localStorage de la web
      axios.get('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .then((response) => {
          console.log(response)
          const loggedUser = Object.values(response.data).filter((user) => {
            if (user !== null) {

              if (user.idToken !== null && user.idToken) {
            console.log(user)

                return user.idToken === localIdToken
              }
            }
          })
          console.log(loggedUser)
          // Se ha detectado una sesión
          if (loggedUser != '') {
            setLogin(true);
            console.log("sesión iniciada")
          }
          // console.log(loggedUser)
        }).catch((error) => {
          console.log(error)
        })

      // console.log("Header mounted")
    }
    else {
      console.log("No session detected")
    }

  }, [])


  // if (carrito == false) {
  return (
    <>
      <AutContext.Provider value={{ carrito: carrito, set: setCarrito }}>
        <LoginContext.Provider value={{ login: login, setLogin: setLogin, loginData: loginData, setLoginData: setLoginData }}>
          <Header />
          <Container style={{ maxWidth: '100%' }}>
            {
              carrito ?
                <Row className='containerFondo'>
                  <Col style={{ height: '90vh' }} sm={9}>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/products' element={<Products />} />
                      <Route path='/orders' element={<Orders />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/signup' element={<Signup />} />
                    </Routes>
                  </Col>
                  <Col sm={3} style={{ height: '90vh', backgroundColor: 'lightgrey' }}>
                    <Carrito></Carrito>
                  </Col>
                </Row>
                :
                <Row className='containerFondo'>
                  <Col style={{ height: '90vh' }}>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/products' element={<Products />} />
                      <Route path='/orders' element={<Orders />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/signup' element={<Signup />} />
                    </Routes>
                  </Col>
                </Row>
            }
          </Container>
        </LoginContext.Provider>
      </AutContext.Provider>
    </>
  );

}

export default App;
