import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Home({ name, capital, currency, fleg, population, languages }) {
  return (
    <>
      {/* real data comes from country data */}
      <div className="row">
        <div className="col-md-7 rounded mx-auto mt-">
          <div
            className="card m-3 shadow p-2 border border-dark"
            id="countryCard"
          >
            <img src={fleg} className="card-img-top" alt="country flag logo" />
            <div className="card-body">
              <p className="text-light display-1 my-3">{name}</p>
              <p className="text-light fs-5">
                <span className="text-info">Capital City:</span> {capital}
              </p>
              <p className="text-light fs-5">{currency}</p>
              <p className="text-light fs-5">{languages}</p>
              <p className="text-light fs-5">
                <span className="text-info">population: </span> {population}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
