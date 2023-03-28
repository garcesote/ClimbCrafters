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
  const [carritoData, setCarritoData] = useState([]);
  const [loginData, setLoginData] = useState();
  const loginContext = useContext(LoginContext);
  const [email, setEmail] = useState("");

  const carritoComponent = (
    <Col style={{ height: '90vh', width: '40vw', backgroundColor: 'lightgrey', position: 'fixed', right: '0px' }}>
      <Carrito></Carrito>
    </Col>
  )
  
  // Comprobar si hay una sesión iniciada al abrir el navegador
  useEffect(() => {

    console.log('EEEEIII');
    const localIdToken = localStorage.getItem("idToken");
    if (localIdToken) {

      console.log('EEEEIII2');
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

            //CARGAMOS EL CARRITO DEL USUARIO
            axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loggedUser[0].email.split('.').join("")+"/carrito.json")
            .then((res) => {
                let arrayProductos = [];
                const data = res.data;
                console.log('CARRITO: ');
                console.log(data);
                for(let key in data){
                    arrayProductos.push({
                        id:key,
                        nombre:data[key].nombre,
                        descripcion:data[key].descripcion,
                        precio:data[key].precio,
                        img: data[key].img,
                        cantidad: data[key].cantidad
                    })
                }
                console.log("HOLAAA");
                setCarritoData(arrayProductos);
              });
          }

        }).catch((error) => {
          console.log(error)
        })
    }
    else {
      console.log("No session detected")
    }

  }, [])

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
