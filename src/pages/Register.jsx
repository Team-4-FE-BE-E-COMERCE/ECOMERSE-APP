import React from "react";

import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function Register() {
  return (
    <div className="container  px-4 mx-auto font-poppins">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="w-full h-screen bg-bgdasar container">
          <div className="container  h-full flex flex-col justify-center items-center p-10">
            <h1 className="font-bold text-white">REGISTER</h1>
            <div className=" border-white w-full my-5">
              <h4 className="text-white">Name</h4>
              <CustomInput className="w-full border border-white" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="w-full my-5">
              <h4 className="text-white">Email</h4>
              <CustomInput className="w-full border border-white" id="inputEmail" type="email" placeholder="Your Email" />
            </div>
            <div className="w-full my-5">
              <h4 className="text-white">Password</h4>
              <CustomInput className="w-full border border-white" id="inputPassword" type="password" placeholder="Your Password" />
            </div>
            <div className="w-full my-5">
              <CustomButton label="Register" />
            </div>
            <div className="mt-10 flex items-center">
              <div className="m-1">Do You Have an Account?</div>
              <Link to="/login">
                <div className="m-1 text-white font-bold"> Log In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(Register);
