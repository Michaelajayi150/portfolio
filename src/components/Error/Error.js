import ErrorImg from "./error.png";
import "./error.css";
import { Container, NavLink } from "react-bootstrap-v5";
import ScrolltoTop from "./ScrolltoTop";

function Error() {
  return (
    <div className="error">
      <ScrolltoTop />
      <div className="error-bg"></div>
      <Container>
        <div className="error-content">
          <div className="error-text">
            <h1 className="err-head">4</h1>
            <div className="error-image">
              <img src={ErrorImg} alt="Error" />
            </div>
            <h1 className="err-head">4</h1>
          </div>
          <div className="error-p">
            <h1>Page Not Found</h1>
            <p>This site is still ongoing and has not been deployed yet.</p>
            <p>
              For Further Enquiry, Contact the owner of the site or{" "}
              <NavLink
                href="mailto: ajayimichael150@gmail.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  padding: "0",
                  display: "inline",
                }}
              >
                TheDev.IO
              </NavLink>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Error;
