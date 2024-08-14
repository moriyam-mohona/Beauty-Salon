import { useEffect, useState } from "react";
import Button from "../../../Component/Button/Button";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
    // return [services, loading];
  }, []);

  return (
    <div className="px-20 py-10">
      <h2 className="font-bold text-4xl text-center mb-16">
        Our Awesome <span className="text-pink-500">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {services.slice(0, 3).map((service) => (
          <div
            key={service._id}
            className="card bg-pink-50 shadow-xl py-10 h-96 "
          >
            <figure className="p-5 bg-pink-200 rounded-full">
              <img src={service.icon} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <h2 className="card-title text-pink-500">$ {service.price}</h2>
              <p className="max-w-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <Button label="Explore More"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
