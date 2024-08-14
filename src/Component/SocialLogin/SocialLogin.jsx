import { useContext } from "react";
import { AuthContext } from "../../Pages/Authentication/Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center p-3 border border-stone-400 rounded-full mx-auto max-w-screen-sm">
      <div className="text-2xl">
        <FcGoogle />
      </div>
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
    </div>
  );
};

export default SocialLogin;
