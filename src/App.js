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
import DetailProduct from './Pages/DetailProduct';
import Confirmation from './Pages/Confirmation';

function App() {

  const [carrito, setCarrito] = useState(false);
  const [login, setLogin] = useState();
  const [carritoData, setCarritoData] = useState(
    [
      {id: "1", nombre: "Roca gorda", descripcion: "Descripción del productaco", precio: 12, cantidad: 3, img: "https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"},
      {id: "2", nombre: "Roquetes", descripcion: "Tocho tocho tochoooooo", precio: 10, cantidad: 2, img: "https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"},
      {id: "3", nombre: "Cositas", descripcion: "A mamarla a otro sitio", precio: 5, cantidad: 1, img: "https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"},
      {id: "4", nombre: "Muchas rocas", descripcion: "Garcesote guele a pito", precio: 100, cantidad: 1, img: "https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"}
    ]);
  const [loginData, setLoginData] = useState();
  const loginContext = useContext(LoginContext);
  const [email, setEmail] = useState("");

  const carritoComponent = (
    <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position: 'fixed', right: '0px' }}>
      <Carrito></Carrito>
    </Col>
  )
  
  /*useEffect(() => {
    console.log('holaa')
  },[carrito, carritoData])*/
  
  // Comprobar si hay una sesión iniciada al abrir el navegador
  useEffect(() => {

    const localIdToken = localStorage.getItem("idToken");
    if (localIdToken) {

      // Buscar en la BBDD un idToken igual al que hay guardado en el localStorage de la web
      axios.get('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .then((response) => {
          const loggedUser = Object.values(response.data).filter((user) => {
            if (user !== null) {
              if (user.idToken !== null && user.idToken) {
                return user.idToken === localIdToken
              }
            }
          })
          // Se ha detectado una sesión
          if (loggedUser != '') {
            setLogin(true);
            setEmail(loggedUser[0].email.split('.').join(""))
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
      <AutContext.Provider value={{ carrito: carrito, set: setCarrito, carritoData: carritoData, setCarritoData: setCarritoData }}>
        <LoginContext.Provider value={{ login: login, setLogin: setLogin, loginData: loginData, setLoginData: setLoginData, email: email, setEmail: setEmail }}>
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
                      <Route path='/detail-product/:id' element={<DetailProduct />} />
                      <Route path='/confirmation' element={<Confirmation />} />
                    </Routes>
                  </Col>
                  <Col sm={3} style={{ height: '90vh', backgroundColor: 'lightgrey' }}>
                    <Carrito data={carritoData}></Carrito>
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
                      <Route path='/detail-product/:id' element={<DetailProduct />} />
                      <Route path='/confirmation' element={<Confirmation />} />
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
