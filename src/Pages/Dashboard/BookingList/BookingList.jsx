import { RiDeleteBinLine } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const BookingList = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center mb-16">
        Our Awesome <span className="text-pink-500">Services</span>
      </h2>
      <div className="font-bold text-2xl text-center mb-16 flex justify-between">
        <h2>My Booking List : {cart.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
        <button className="btn">Pay</button>
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        {cart.map((item) => (
          <div key={item._id}>
            <div className="card bg-pink-50 w-80 shadow-xl">
              <div className="px-5 pt-5 flex justify-between ">
                <img src={item.icon} className="p-3 rounded-full bg-pink-200" />
                <div className="flex gap-3 items-center">
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleDelete(item._id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                  <button className="btn bg-pink-400 px-5 text-white ">
                    Status
                  </button>
                </div>
              </div>
              <div className="card-body py-3">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
