import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((value, index) => (
        <div className="col" key={index}>
          <div className="card">
            <img src={value.image} alt=""/>
            <div className="card-body">
              <h5 className="card_title">{value.name}</h5>
              <hr/>
              <p>Species: {value.species}</p>
              <p>Location: {value.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
