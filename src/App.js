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
import CustomerDetails from './Pages/CustomerDetails';
import Thanks from './Pages/Thanks';
import OrderDetails from './Pages/OrderDetails';
import OrdersContext from './Storage/OrdersContext';

function App() {

  const [carrito, setCarrito] = useState(false);
  const [login, setLogin] = useState();
  const [carritoData, setCarritoData] = useState([]);
  const [loginData, setLoginData] = useState();
  const loginContext = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  const carritoComponent = (
    <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position: 'fixed', right: '0px' }}>
      <Carrito></Carrito>
    </Col>
  )

  // Comprobar si hay una sesión iniciada al abrir el navegador
  useEffect(() => {
    console.log(new Date())
    const localIdToken = localStorage.getItem("idToken");
    if (localIdToken) {
      // Verify the token with Firebase Authentication API
      const idToken = {
        idToken: localIdToken
      }
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC6DdMR99w1znVUnEFg7WH9kxYYVyQHERw', idToken)
        .then((data) => {
          console.log(data)
          setLogin(true);
          setEmail(data.data.users[0].email.split('.').join(""))
          // console.log("sesión iniciada")
        }).catch((error) => {
          console.error(error);
        })
    }
    else {
      // console.log("No session detected")
    }

  }, [])

  useEffect(() => {

    //CARGAMOS EL CARRITO DEL USUARIO cuando iniciamos sesión
    if (login === true) {

      axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + email + "/carrito.json")
        .then(res => {
          let arrayProductos = [];
          const data = res.data;
          // console.log('CARRITO: ');
          console.log(data);
          for (let key in data) {
            if (data[key] != null) {
              arrayProductos.push({
                id: key,
                nombre: data[key].nombre,
                descripcion: data[key].descripcion,
                precio: data[key].precio,
                img: data[key].img,
                cantidad: data[key].cantidad
              })
            }
          }
          // console.log("HOLAAA");
          setCarritoData(arrayProductos);
        });
    }
  }, [login])

  return (
    <>
      <AutContext.Provider value={{ carrito: carrito, set: setCarrito, carritoData: carritoData, setCarritoData: setCarritoData }}>
        <LoginContext.Provider value={{ login: login, setLogin: setLogin, loginData: loginData, setLoginData: setLoginData, email: email, setEmail: setEmail }}>
          <OrdersContext.Provider value={{ orders: orders, setOrders: setOrders, reload: reload, setReload: setReload }}>
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
                        <Route path='/customer-details' element={<CustomerDetails />} />
                        <Route path='/thanks' element={<Thanks />} />
                        <Route path='/order-details/:id' element={<OrderDetails />} />
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
                        <Route path='/customer-details' element={<CustomerDetails />} />
                        <Route path='/thanks' element={<Thanks />} />
                        <Route path='/order-details/:id' element={<OrderDetails />} />
                      </Routes>
                    </Col>
                  </Row>
              }
            </Container>
          </OrdersContext.Provider>
        </LoginContext.Provider>
      </AutContext.Provider>
    </>
  );

}

export default App;
