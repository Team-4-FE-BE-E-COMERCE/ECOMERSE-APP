import React from "react";
import CustomInput from "../components/CustomInput";

function Login() {
  return (
    <div>
      <div className="container  px-4 mx-auto flex flex-col justify-center items-center w-full h-screen font-poppins">
        <div className="bg-bgdasar  rounded-md p-8  w-500 h-auto mb-10">
          <div>
            <div className="flex flex-col  w-full my-2 text-white">
              <h4> Email</h4>
              <CustomInput id="input-email" type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className=" bg-bgdasar ">
            <div className="flex flex-col  w-full my-2 text-white">
              <h4> Password</h4>
              <CustomInput id="input-password" type="password" placeholder="Your Password" />
            </div>
          </div>
          <div>
            <button id="btn-login" className="bg-white text-bgdasar rounded font-bold w-full my-2 p-1.5">
              Login
            </button>
          </div>
        </div>
        <div className="mt-10 flex items-center">
          <div className="m-1">Don't You Have an Account?</div>
          <div className="m-1 text-bgdasar font-bold"> Register</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
