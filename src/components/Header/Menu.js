import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function Menu({ item, toggle }) {
  return (
    <Link onClick={toggle} className="nav-link" to={{ pathname: item.path }}>
      <ScrollIntoView selector={item.ref}>{item.name}</ScrollIntoView>
    </Link>
  );
}

export default Menu;
