import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { CardBtn } from "../components/Card";
import { CgProfile } from "react-icons/cg";
import { useTitle } from "../utils/redux/useTitle";

function ProfilOrang() {
  useTitle("Profile | Orang");

  return (
    <Layout>
      <div className="flex flex-row font-poppins">
        <div className="basis-1/4">
          <div className=" bg-bgdasar mt-2 min-h-screen">
            <div className="flex items-center">
              <div className="text-white  text-7xl m-5">
                <CgProfile className="" />
              </div>
              <div className="text-white">
                <div>Andre</div>
                <div>andre@gmail</div>
              </div>
            </div>
            <div className="px-4 text-white">
              <div className="my-4">Number Phone : 08512112121</div>
              <div className="my-4">Addres : JL. Kyai Mojo, New York Selatan</div>
              <div className="my-4">Bio : -</div>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="grid grid-cols-3">
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(ProfilOrang);
