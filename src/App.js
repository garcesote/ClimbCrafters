import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import AutContext from './Storage/AutContext';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carrito from './Components/Carrito';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  const [carrito, setCarrito] = useState(false);

  const carritoComponent = (
    <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position: 'fixed', right: '0px' }}>
      <Carrito></Carrito>
    </Col>
  )


  // if (carrito == false) {
  return (
    <>
      <AutContext.Provider value={{ carrito: carrito, set: setCarrito }}>
        <Header />
        <Container style={{ maxWidth: '100%'}}>
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
      </AutContext.Provider>
    </>
  );

}

export default App;
