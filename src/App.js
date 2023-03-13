import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';

function App() {
  const axiosTest = () => {
    console.log("Axios is ok")
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
       console.log(res.data)
      });
  }
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <h1>ClimbCrafters</h1>
          Here you'll have the oportunity to craft <h2>your climbing walls</h2>
        </p>
        <button onClick={axiosTest}>Axios test</button>
      </header>
    </div>*/
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </>
  );
}

export default App;
