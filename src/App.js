import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "./components/sidebar";

import "./styles/index.css";

function App() {
  const [location, setLocation] = useState(null);

  const baseUrl = `https://tranquil-bayou-42049.herokuapp.com/`;

  const hitAPI = () => {
    axios
      .get(`${baseUrl}https://www.metaweather.com/api/location/44418/`)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    hitAPI();
  }, []);

  return (
    <div className="App">
      <SideBar location={location} />
      {/* <button onClick={hitAPI}>Hit API</button> */}
    </div>
  );
}

export default App;
