import { useEffect, useState } from "react";
import Navbar from "./Navbar-1";
import TopNavbar from "./Navbar-2";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  // const [newData, setNewData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8000/students')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNewData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching dues:', error);
  //     });
  // }, []);

  return (
    <div className="App">
      <TopNavbar/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;