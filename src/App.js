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
        <Container style={{ maxWidth: '100%' }}>
          {
            carrito ?
              <Row>
                <Col style={{ height: '90vh' }} sm={8}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/orders' element={<Orders />} />
                  </Routes>
                </Col>
                <Col sm={4} style={{ height: '90vh', backgroundColor: 'lightgrey' }}>
                  <Carrito></Carrito>
                </Col>
              </Row>
              :
              <Col style={{ height: '90vh' }}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/orders' element={<Orders />} />
                </Routes>
              </Col>
          }
        </Container>
        {/* {
              carrito && carritoComponent
            } */}
      </AutContext.Provider>
    </>
  );
  // } else {
  //   return (
  //     <>
  //       <AutContext.Provider value={{ carrito: carrito, set: setCarrito }}>
  //         <Header />
  //         <Container style={{ maxWidth: '100%' }}>
  //           <Row>
  //             <Routes>
  //               <Route path='/' element={<Home />} />
  //               <Route path='/products' element={<Products />} />
  //               <Route path='/orders' element={<Orders />} />
  //             </Routes>
  //             <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position:'fixed', right:'0px' }}>
  //               <Carrito></Carrito>
  //             </Col>
  //           </Row>
  //         </Container>
  //       </AutContext.Provider>
  //     </>
  //   );
  // }

}

export default App;
