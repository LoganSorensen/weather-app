import { useState, useEffect } from "react";
import { connect } from "react-redux";
// import axios from "axios";

import SideBar from "./components/sidebar";

import { setLocation } from "./actions/setLocationActions";
import { weatherAPI } from "./utils/weatherAPI";

import "./styles/index.css";

function App(props) {
  useEffect(() => {
    weatherAPI()
      .get("location/44418/")
      .then((res) => {
        console.log("api res", res.data);
        props.setLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <SideBar />
      {/* <button onClick={hitAPI}>Hit API</button> */}
    </div>
  );
}

export default connect(null, { setLocation })(App);
