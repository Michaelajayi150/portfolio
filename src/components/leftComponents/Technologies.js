import React from "react";

function Technologies() {
  return (
    <div className="expertise">
      <strong className="headings">Technologies</strong>

      <div className="expertise-lang">
        <div className="lang-expert html">
          <h3 className="lang-framework">HTML</h3>
          <div className="progress-bar"></div>
        </div>

        <div className="lang-expert css">
          <h3 className="lang-framework">CSS</h3>
          <div className="progress-bar"></div>
        </div>

        <div className="lang-expert sass">
          <h3 className="lang-framework">SCSS</h3>
          <div className="progress-bar"></div>
        </div>

        <div className="lang-expert js">
          <h3 className="lang-framework">JS</h3>
          <div className="progress-bar"></div>
        </div>

        <div className="lang-expert react">
          <h3 className="lang-framework">React</h3>
          <div className="progress-bar"></div>
        </div>

        <div className="lang-expert node">
          <h3 className="lang-framework">Node js</h3>
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
