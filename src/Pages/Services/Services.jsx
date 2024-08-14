import { useContext, useEffect, useState } from "react";
// import Button from "../../Component/Button/Button";
// import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Services = () => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure(); // console.log(user.email);
  const navigate = useNavigate();
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
        // console.log(data);
      });
    // return [services, loading];
  }, []);
  const handleBooking = (service) => {
    if (user && user.email) {
      //ToDo: send data to database
      const cartItem = {
        email: user.email,
        serviceId: service._id,
        title: service.title,
        price: service.price,
        description: service.description,
        icon: service.icon,
      };
      axiosSecure.post("http://localhost:5000/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${service.title} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're not logged in.",
        text: "Please Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-pink-50">
      <h2 className="font-bold text-5xl text-center p-10 text-pink-500">
        All Services
      </h2>
      <div className="overflow-x-auto mx-20 mb-20">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Details</th>
              <th>Book Now </th>
            </tr>
          </thead>{" "}
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service.icon}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.title}</div>
                      <div className="text-sm opacity-50">${service.price}</div>
                    </div>
                  </div>
                </td>
                <td className="max-w-screen-md">{service.description}</td>
                <th>
                  <button
                    onClick={() => handleBooking(service)}
                    className="btn btn-ghost btn-sm rounded-full bg-pink-500 text-white py-1 text-md"
                  >
                    Book Now
                  </button>
                </th>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
      <div>
        <table className="table"></table>
      </div>
    </div>
  );
};

export default Services;
