import React from "react";

const Characters = ({ characters, search }) => {
  if(characters.length === 0 ) return <p>The character "{search}" does not exist</p>
  return (
    <div className="row">
      {characters.map((value, index) => (
        <div className="col card" key={index}>
          <div className="card-character">
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
