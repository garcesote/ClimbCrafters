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

function App() {

  const [carrito, setCarrito] = useState(false);

  if(carrito==false){
    return (
      <>
        <AutContext.Provider value={{carrito: carrito, set: setCarrito}}>
          <Header/>
          <Container style={{maxWidth: '100%'}} className='border'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/orders' element={<Orders/>}/>
            </Routes>
          </Container>
        </AutContext.Provider>
      </>
    );
  }else{
    return (
      <>
        <AutContext.Provider value={{carrito: carrito, set: setCarrito}}>
          <Header/>
          <Container style={{maxWidth: '100%'}} className='border'>
            <Row>
              <Col sm={9}>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/orders' element={<Orders/>}/>
                </Routes>
              </Col>
              <Col sm={3} className='border' style={{height: '100vh'}}>
                <Carrito></Carrito>
              </Col>
            </Row>
          </Container>
        </AutContext.Provider>
      </>
    );
  }
  
}

export default App;
