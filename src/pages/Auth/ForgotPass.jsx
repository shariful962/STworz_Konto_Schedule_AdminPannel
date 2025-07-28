import React, { useState, useTransition } from "react";
import WebIcons from "../../assets/images";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import UpdatePassword from "../../components/Auth/UpdatePassword";
import VerifyCode from "../../components/Auth/VerifyCode";
import { useNavigate } from "react-router-dom";

const ForgotPass = ({ initialStep, initialEmail, ckOtpVerify }) => {

  const [step, setStep] = useState(initialStep || "email");
  const [email, setEmail] = useState(initialEmail || "");
  const [Otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();


    // Email Function
  const handleSendEmail = () => {
    setStep("verify");
  };

    // OTP handle funtion
  const handleOTP =  () => {
     setStep("reset");
  };


    // Reset Password Function
  const handleSetPassword = () => {
    
    navigate("/signin");
  };

  return (
    <div className="flex gap-6 mx-auto min-h-screen font-Inter ">
      {/* left content  */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center">
        {/* logo section  */}
        <div>
          <div className=" absolute top-0 left-0 m-5">
            <img src={WebIcons.logo} alt="a animate picture" className="w-32"/>
          </div>

          {/* import here other components of authentication */}
          {/* Functions */}
        {step === "email" && (
          <ForgotPassword
            email={email}
            setEmail={setEmail}
            onSubmit={handleSendEmail}
          />
        )}

        {step === "verify" && (
          <VerifyCode
            email={email}
            otp={Otp}
            setOtp={setOtp}
            onSubmit={handleOTP}
          />
        )}

        {step === "reset" && (
          <UpdatePassword
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            onSubmit={handleSetPassword}
          />
        )}
         
        </div>
      </div>
              
      {/* right section  */}
      <div className="bg-Primary w-1/2 hidden md:flex items-center justify-center">
        <img src={WebIcons.authMain} alt="A men image " className="hidden md:block" />
      </div>
    </div>
  );
};

export default ForgotPass;

