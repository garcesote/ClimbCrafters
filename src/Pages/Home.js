import logo from './../logo.svg';
import axios from 'axios';
import './../App.css';


function Home() {
  const axiosTest = () => {
    console.log("Axios is ok")
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
       console.log(res.data)
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <h1>ClimbCrafters</h1>
          Here you'll have the oportunity to craft <h2>your climbing walls</h2>
        </p>
        <button onClick={axiosTest}>Axios test</button>
      </header>
    </div>
  );
}

export default Home;
