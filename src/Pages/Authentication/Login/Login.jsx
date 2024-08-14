import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import logo from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import SocialLogin from "../../../Component/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire("Login successful!");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="bg-pink-50 pt-10 pb-20">
      <div className="flex-col">
        <div className="text-center mb-10">
          <img src={logo} alt="" className="h-14 mx-auto mb-5" />
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form
          className="shadow-2xl max-w-screen-sm mx-auto p-10 bg-white"
          onSubmit={handleLogin}
        >
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input w-full border-b-2 border-gray-300 focus:border-pink-500"
              required
            />
          </div>
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input w-full border-b-2 border-gray-300 focus:border-pink-500"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </span>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 ">
            <Button type="submit" label="Login" className="w-full" />
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link to="/signUp" className="link text-pink-500">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <div className="flex max-w-sm mx-auto items-center my-10">
          <hr className="flex-grow border-t-1 border-stone-400" />
          <p className="px-4">OR</p>
          <hr className="flex-grow border-t-1 border-stone-400" />
        </div>
        {/* <div className="flex items-center gap-2 justify-center p-3 border border-stone-400 rounded-full mx-auto max-w-screen-sm">
          <div className="text-2xl">
            <FcGoogle />
          </div>
          <button onClick={handleGoogleSignIn}>Continue with Google</button>
        </div> */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
