import React from "react";

const Exed = ({ keyProp }) => {
  return (
    <>
      {keyProp.map((key, index) => {
        return (
          <div key={index + 1} className="exed-data-item">
            <span></span>
            <div className="exed-date">{key.year}</div>
            <div className="exed-info">
              <h1>{key.company}</h1>
              <p>{key.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Exed;
