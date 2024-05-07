import Home from "./Home";
import { useState } from "react";
import "../App.css";
import { countries } from './Data';


const CountryData = () => {
  const [displayTxt, setDisplayTxt] = useState(true);
  const [SearchVal, setSearchVal] = useState("");

  let filteredCountry = countries.filter(
    (data) => data.name.toLocaleLowerCase() === SearchVal.toLocaleLowerCase()
  );

  return (
    <>
      <h1 className="text-light display-5 text-decoration-underlin mt-5 fw-bold">
        World Country Data
      </h1>

      {displayTxt && (
        <div className="banner">
          <p className="fs-5" id="banner">
            Wanna Know More About World Country Like Capital City,
            Population...Just Search
          </p>
        </div>
      )}

      <div className="col-md-6 mx-auto my-5">
        <input
          className="form-control form-control-lg bg-dar opacity-50 text-dark mx-auto w-75"
          placeholder="Search Country Name Here"
          type="search"
          onChange={(event) => setSearchVal(event.target.value)}
        />
      </div>

      <div className="content">
        {filteredCountry.map((data) => (
          <div className="con">

            <Home
              name={data.name}
              capital={data.capital}
              currency={data.currencies.map((cu) => (
                <p>
                  <span className="text-info my-5">Currency: </span>
                  {cu.name}
                </p>
              ))}
              fleg={data.flag}
              population={data.population}
              languages={data.languages.map((la, index) => (
                <p>
                  <span className="text-info">language {index + 1}: </span>
                  {la},
                </p>
              ))}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryData;
