import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { CgProfile } from "react-icons/cg";
import { CustomButton } from "../components/CustomButton";

function Profile() {
  return (
    <Layout>
      <div className="flex flex-row font-poppins">
        <div className="basis-1/4">
          <div className=" bg-bgdasar mt-2">
            <div className="flex items-center">
              <div className="text-white  text-7xl m-5">
                <CgProfile className="" />
              </div>
              <div className="text-white">
                <div>Alexander Mount</div>
                <div>Alexander@gmail.com</div>
              </div>
            </div>
            <div className="px-4 text-white">
              <div className="my-4">Number Phone : 08534213432</div>
              <div className="my-4">Addres : Jl. Kota Baru No.23, New York</div>
              <div className="my-4">Saldo : Rp. 200.000</div>
              <div className="my-4">Bio : -</div>
            </div>

            <div className="flex px-4 my-4">
              <div className="w-full m-2">
                <CustomButton label="Edit Profile" />
              </div>
              <div className="w-full m-2">
                <CustomButton label="Delete Acc" />
              </div>
            </div>
          </div>
          <div className="bg-bgdasar">
            <div>
              <div className="p-4 text-white ">
                My Order
                <div className="p-4 bg-white text-bgdasar">ID Order 1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="grid grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(Profile);
