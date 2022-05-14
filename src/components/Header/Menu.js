import { NavDropdown } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function Menu({ item, toggle }) {
  return (
    <>
      {item.ref ? (
        <Link
          onClick={toggle}
          className="nav-link"
          to={{ pathname: item.path }}
        >
          <ScrollIntoView selector={item.ref}>{item.name}</ScrollIntoView>
        </Link>
      ) : (
        <NavDropdown title={item.name} id="collasible-nav-dropdown">
          {item.dropdown.map((item, index) => {
            return (
              <Link
                onClick={toggle}
                className="dropdown-item"
                to={{ pathname: "/" }}
                key={index}
              >
                <ScrollIntoView selector={item.ref}>{item.name}</ScrollIntoView>
              </Link>
            );
          })}
        </NavDropdown>
      )}
    </>
  );
}

export default Menu;
