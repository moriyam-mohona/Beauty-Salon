import { Link, NavLink } from "react-router-dom";
import Button from "../../Component/Button/Button";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Authentication/Provider/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout().then(() => {
      // Sign-out successful.
    });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/">Our Portfolio</Link>
      </li>
      <li>
        <Link to="/dashboard/bookingList">
          <CiShoppingCart className="text-2xl" />
          <div className="badge">+{cart.length}</div>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-pink-50 px-10 pt-10  items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <img src={logo} alt="Jerin's Parlour" className="h-12" />
      </div>
      <div className="">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {user ? (
          <>
            <div className="avatar dropdown dropdown-hover dropdown-bottom dropdown-end">
              <div className="w-10 rounded-full mr-2 tabIndex={0}">
                <img src={user.photoURL} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">User Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </ul>
            </div>
            <Button label="Logout" onClick={handleLogout} />
          </>
        ) : (
          <>
            <Link to="/login">
              <Button label="Login" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
