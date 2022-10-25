import React from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { handleAuth } from "../utils/redux/reducers/reducer";

import CustomInput from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(`https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/login`, body)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        dispatch(handleAuth(true));
        alert("Login Successfull");
        navigate("/home");
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="container  px-4 mx-auto flex flex-col justify-center items-center w-full h-screen font-poppins">
        <form className="bg-bgdasar  rounded-md p-8  w-500 h-auto mb-10 " onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="flex flex-col  w-full my-2 text-white">
              <h4> Email</h4>
              <CustomInput id="input-email" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className=" bg-bgdasar ">
            <div className="flex flex-col  w-full my-2 text-white">
              <h4> Password</h4>
              <CustomInput id="input-password" type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <CustomButton id="btn-login" label="Login" loading={loading || disabled} />
          </div>
        </form>
        <div className="mt-10 flex items-center">
          <div className="m-1">Don't You Have an Account?</div>
          <Link to="/register">
            <div className="m-1 text-bgdasar font-bold"> Register</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(Login);
