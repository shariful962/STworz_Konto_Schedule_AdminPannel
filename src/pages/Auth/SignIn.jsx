import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import mail from "../../assets/icons/auth/mail.svg";
import women from "../../assets/women.svg";
import { Eye, EyeOff } from "lucide-react";
import { FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/dashboard')
  };

  return (
    <div className="flex mx-auto min-h-screen font-Inter">
      {/* left content  */}
      <div className="w-full md:w-1/2">
        {/* logo section  */}
        <div className="m-5">
          <img src={logo} alt="a animate picture" />
        </div>
        {/* form section area  */}
        <div className="max-w-md  mx-auto mt-16 lg:mt-44">
          <form onSubmit={handleSignIn}>
            <h1 className="font-medium md:text-[] text-[2rem] text-textClr text-center">
             Admin Login
            </h1>
            {/* email input  */}
            <div>
              <label className="block mb-1 font-Inter font-medium text-textClr">
                Email{" "}
              </label>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className=" outline-none flex-1 text-gray-800"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <img src={mail} alt="email-icon" />
              </div>
            </div>

            {/* password input  */}
            <div className="my-9">
              <label className="block mb-1 font-Inter font-medium text-textClr">
                Password
              </label>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent outline-none flex-1 text-gray-800"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-[#797979] hover:text-textClr/70 transition duration-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="text-right mt-1">
                <button
                  type="button"
                  onClick={() => navigate("/forgotPassword")}
                  className="text-Primary text-sm hover:underline"
                >
                  Forget Password
                </button>
              </div>
            </div>

            {/* submition button area  */}

            <button type="submit" className="mt-2 cursor-pointer text-lg  font-bold font-Inter w-full bg-Primary hover:bg-Primary/90 text-white py-3 rounded-xl transition duration-300 ">
              Log In
            </button>
            
          </form>

          <h1 className="text-center my-7">Or</h1>

          <div className="sign_with_goole">
            <FcGoogle size={28} /> Log in with google account
          </div>
        </div>
      </div>
      {/* right section  */}
      <div className="bg-Primary w-1/2 hidden md:flex items-center justify-center">
        <img src={women} alt="A men image " className="hidden md:block" />
      </div>
    </div>
  );
};

export default SignIn;
