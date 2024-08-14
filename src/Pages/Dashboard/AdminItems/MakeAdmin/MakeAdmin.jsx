import { useQuery } from "@tanstack/react-query";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MakeAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Done!",
              text: `${user.name} is Admin Now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUserDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    <div className="p-10">
      <h2 className="font-bold text-4xl text-center mb-16">Make Admin</h2>
      <div className="font-bold text-2xl text-center mb-16 flex justify-between">
        <h2>Total User : {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.email}</div>
                      <div className="text-sm opacity-50">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>User</td>
                <td>
                  {/* { user.role === 'admin' ? 'Admin' :}
                   */}
                  {user.role === "admin" ? (
                    <h2 className="font-bold">Admin</h2>
                  ) : (
                    <button
                      className="text-xl bg-pink-500 p-3 rounded-xl text-white"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <GrUserAdmin />
                    </button>
                  )}
                </td>
                <th className="items-center">
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleUserDelete(user)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
