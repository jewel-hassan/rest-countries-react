import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Visiting countries of the world !!{countries.length}</h1>
      <div className="countries">
        {countries.map((country) => {
          console.log(country);
          return (
            <div key={country.cs3}>
              <Country country={country} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
