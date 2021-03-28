import { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import userEdit from "../assets/images/userEdit.png";

const Account = () => {
  const [countries, setCountries] = useState({ all: [] });

  useEffect(async () => {
    const resp = await axios.get(`https://restcountries.eu/rest/v2/all`);
    setCountries(resp.data);
  }, []);
  var country = [];

  for (var i = 0; i < countries.length; i++) {
    country.push(
      <option defaultValue key={i}>
        {countries[i].name}
      </option>
    );
  }

  return (
    <div>
      <div className="header-block"></div>
      <Header />
      <div className="container-fluid py3 py-md-5">
        <div className="row mx-0">
          <SideMenu />
          <div className="col-12 col-md-9 px-0 px-md-2">
            <h1 className="large-title mb-3 mb-md-4">Account</h1>
            <h2 className="main-title mb-3">
              Review and update your account details
            </h2>
            <div className="main-desc mb-3">
              Please make sure these details are up to date as they'll be used
              for your bookings, and communications with the hotels.
            </div>
            <a href="./" className="d-block small-title color-2 mb-3">
              {">"} Learn more about our premium subscription
            </a>
            <div className="card">
              <div className="row mx-0 p-3">
                <div className="col-2 col-md-1 px-0 text-center">
                  <img src={userEdit} alt=""></img>
                </div>
                <div className="col-10 col-md-11 main-desc">
                  <div className="main-title">John Doe</div>
                  Please make sure these details are up to date as they'll be
                  used for your bookings, and communications with the hotels.
                </div>
              </div>
              <form className="bg-gray p-3">
                <div className="row mx-0">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="john.doe@domain.tld"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className="form-group col-md-6">
                    <select id="country" className="form-control">
                      {country}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="sr-only" htmlFor="mobile">
                      Username
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">+66</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="(0) 053 555 555"
                      />
                    </div>
                  </div>
                  <div
                    className="w-divider w-100 my-3"
                    style={{
                      height: "0.5px",
                      backgroundColor: "#000",
                      opacity: "0.05",
                    }}
                  ></div>
                  <div className="form-group col-md-6">
                    <label htmlFor="current-password">Current Password</label>
                    <span className="float-right blue-link">Forgot?</span>
                    <input
                      type="password"
                      className="form-control"
                      id="current-password"
                      placeholder="******"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="new-password">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="new-password"
                      placeholder="New password"
                    />
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-md-9 text-right my-auto">
                    Your data will be
                    <a href="./" className="color-2 ml-1">
                      handled with care
                    </a>
                  </div>
                  <div className="col-md-3">
                    <button
                      type="submit"
                      className="btn btn-theme bg-color-1 w-100 text-white"
                      style={{ background: "#786AFF" }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
