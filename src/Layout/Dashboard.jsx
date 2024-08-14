import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { MdOutlineBorderColor, MdOutlineTextsms } from "react-icons/md";
import { IoIosLogOut, IoMdAdd } from "react-icons/io";
import { RiAdminLine, RiServiceLine } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logout().then(() => {
      // Sign-out successful.
    });
  };

  return (
    <div className="drawer lg:drawer-open bg-pink-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex gap-5  h-full">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden text-3xl p-5 "
        >
          <IoMenu />
        </label>
        {/* Page content here */}
        <div className="p-5 w-full">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full p-3 bg-pink-50">
          <div>
            <Link to="/dashboard">
              <img src={logo} alt="" className="w-40 m-4" />
            </Link>
          </div>
          <div className="w-60 divide-y-4 divide-pink-200 my-4">
            {isAdmin ? (
              <>
                <ul className="menu text-base-content">
                  <li>
                    <NavLink
                      to="/dashboard/orderList"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <MdOutlineBorderColor className="text-xl" />
                      Order List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/addService"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <IoMdAdd className="text-xl" />
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/makeAdmin"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <RiAdminLine className="text-xl" />
                      Make Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageService"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <GrServices className="text-xl" />
                      Manage Service
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="menu text-base-content">
                  <li>
                    <NavLink
                      to="/dashboard/bookNow"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <CiShoppingCart className="text-xl" />
                      Book Now
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/bookingList"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <GoChecklist className="text-xl" />
                      Booking List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/review"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pink-500 text-white"
                          : "bg-transparent text-black"
                      }
                    >
                      <MdOutlineTextsms className="text-xl" />
                      Review
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <ul className="menu text-base-content">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-pink-500 text-white"
                      : "bg-transparent text-black"
                  }
                >
                  <IoHomeOutline className="text-xl" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-pink-500 text-white"
                      : "bg-transparent text-black"
                  }
                >
                  <RiServiceLine className="text-xl" />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleLogout}
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-pink-500 text-white"
                      : "bg-transparent text-black"
                  }
                >
                  <IoIosLogOut className="text-xl" />
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
