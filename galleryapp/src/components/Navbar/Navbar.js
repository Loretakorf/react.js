import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = ({ pages }) => {
 
  return (
    <nav className="navbar">
    <div className="nav-container">
        {pages.map((page) => {
          return <Link key={page.to} to={page.to} className="nav-link">{page.label}</Link>
        })}
      </div>
    </nav>
  );
};
export default Navbar;
