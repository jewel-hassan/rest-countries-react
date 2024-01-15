import React from "react";
import "./Country.css";

function Country(props) {
  const { name, capital, area, population, flags } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name:{name.common}</h3>
      <h4>Capital:{capital}</h4>
      <h5>Area:{area}</h5>
      <h6>Population:{population}</h6>
    </div>
  );
}

export default Country;
