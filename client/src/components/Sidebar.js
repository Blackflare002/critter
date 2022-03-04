import catLogo from "../cat-logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav>
        <img src={catLogo} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
