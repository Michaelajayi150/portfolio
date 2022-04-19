import React from "react";
import DevImage from "./dev-image.jpg";

function LeftHero() {
  return (
    <div>
      <div className="dev-desc">
        <img src={DevImage} alt="Developer Michael" width="100%" />
        <div className="job-label">
          <strong className="job-label-tag">WEB DEVELOPER</strong>
        </div>
      </div>
      <div className="dev-education">
        <strong className="headings">EDUCATION</strong>

        <div className="education-ongoing">
          <div className="sc-one">
            <em>HARVARD UNIVERSITY</em> <br />
            <address> lorem-ipsum pdosdodkk </address>
          </div>
          <div className="sc-two">
            <em>FEDERAL UNIVERSITY OF AKURE (FUTA)</em> <br />
            <address> lorem-ipsum pdosdodkk </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHero;
