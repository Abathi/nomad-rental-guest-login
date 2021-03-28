import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [countries, setCountries] = useState({ all: [] });

  useEffect(async () => {
    const resp = await axios.get(`https://restcountries.eu/rest/v2/all`);
    setCountries(resp.data);
  }, []);
  var country = [];

  for (var i = 0; i < countries.length; i++) {
    country.push(
      <a href="./" className="dropdown-item" key={i}>
        {countries[i].name}
      </a>
    );
  }
  return (
    <header className="bg-gray fixed-top">
      <div className="container-fluid py-2">
        <div className="row justify-content-between">
          <div className="col-5 col-md-2 my-auto">
            <img src={logo} alt="" className="w-100"></img>
          </div>
          <div className="col-7 col-md-2 my-auto text-right">
            <div className="dropdown">
              <button
                className="btn btn-theme p-2"
                type="button"
                id="city"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose a city
                <span className="btn btn-light ml-2">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div className="dropdown-menu" aria-labelledby="city">
                {country}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
