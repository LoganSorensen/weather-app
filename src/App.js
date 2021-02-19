import { useEffect } from "react";
import { connect } from "react-redux";

import SideBar from "./components/sidebar";
import SideBarSearch from './components/sideBarSearch';

import { setLocation } from "./actions/setLocationActions";
import { weatherAPI } from "./utils/weatherAPI";

import "./styles/index.css";

function App(props) {
  useEffect(() => {
    weatherAPI()
      .get("location/44418/")
      .then((res) => {
        props.setLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <SideBar />
      <SideBarSearch />
    </div>
  );
}

export default connect(null, { setLocation })(App);
