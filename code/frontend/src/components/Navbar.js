import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            My Inventory
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
