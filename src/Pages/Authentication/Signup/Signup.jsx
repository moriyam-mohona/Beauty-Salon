import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import Button from "../../../Component/Button/Button";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../../../Component/SocialLogin/SocialLogin";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      Swal.fire("SignedIn Successful!");
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-pink-50 pt-10 pb-20">
      <div className="flex-col">
        <div className="text-center mb-10">
          <img src={logo} alt="Logo" className="h-14 mx-auto mb-5" />
          <h1 className="text-5xl font-bold">Please Signup!</h1>
        </div>
        <form
          className="shadow-2xl max-w-screen-sm mx-auto p-10 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo", { required: "Photo URL is required" })}
              aria-invalid={errors.photo ? "true" : "false"}
            />
            {errors.photo && (
              <span className="text-red-500 text-xs">
                {errors.photo.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                  message:
                    "Password must contain an uppercase letter, a special character, and a number",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </span>
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            {/* <Button label="Sign Up" className="w-full" type="submit" /> */}
            <Button type="submit" label="SignUp" className="w-full" />

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="link text-pink-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <div className="flex max-w-sm mx-auto items-center my-5">
          <hr className="flex-grow border-t-1 border-stone-400" />
          <p className="px-4">OR</p>
          <hr className="flex-grow border-t-1 border-stone-400" />
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signup;
