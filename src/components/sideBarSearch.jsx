import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { fetchLocation } from "../actions/setLocationActions";
import { weatherAPI } from "../utils/weatherAPI";

const SideBarSearch = (props) => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const closeSearch = () => {
    let search = document.querySelector(".sidebar-search");
    search.classList.remove("sidebar-search--open");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    weatherAPI()
      .get(`location/search/?query=${search}`)
      .then((res) => {
        props.fetchLocation(res.data[0].woeid);
        setSearchHistory([
          ...searchHistory,
          { title: res.data[0].title, id: res.data[0].woeid },
        ]);
      })
      .catch((err) => console.log(err));
    setSearch("");
    closeSearch();
  };

  const searchFromHistory = (e) => {
    props.fetchLocation(e.target.value);
    setSearch("");
    closeSearch();
  };

  return (
    <div className="sidebar-search sidebar">
      <button className="close-btn" onClick={closeSearch}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <form onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="search location"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div className="search-history">
        {searchHistory.map((search) => {
          return (
            <button
              key={search.id}
              value={search.id}
              className="search-option"
              onClick={searchFromHistory}
            >
              <span>{search.title}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default connect(null, { fetchLocation })(SideBarSearch);
