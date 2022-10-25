import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { CgProfile } from "react-icons/cg";
import { CustomButtonSatu } from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

function EditProfile() {
  return (
    <Layout>
      <div className="lg:flex flex-row text-poppins text-white py-20">
        <div className="lg:basis-1/4 lg:mr-2">
          <div className="flex justify-center items-center">
            <div className="text-white text-9xl rounded-full bg-bgdasar p-2 my-1 h-32 w-32 flex justify-center items-center">
              <CgProfile />
            </div>
          </div>
          <div className="w-full h-2/3">
            <textarea name="bio" id="editBio" cols="30" rows="10" className="bg-bgdasar w-full text-white p-2">
              Bio
            </textarea>
            <div>
              <div className="flex mb-1">
                <div className="w-full mr-1">
                  <CustomButtonSatu label="Cancel" />
                </div>
                <div className="w-full ml-1">
                  <CustomButtonSatu label="Save" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:basis-3/4 flex flex-col justify-centerr">
          <div className="bg-bgdasar px-20 py-5">
            <div className="my-3">
              <div>
                <h4>Name</h4>
                <CustomInput value="Alexander Mount" type="text" id="editNama" />
              </div>
            </div>
            <div className="my-3">
              <div>
                <h4>Phone Number</h4>
                <CustomInput value="08534213432" type="number" id="editNumber" />
              </div>
            </div>
            <div className="my-3">
              <div>
                <h4>Addres</h4>
                <CustomInput value="Jl. Kota Baru No.23, New York" type="text" id="editAddres" />
              </div>
            </div>
            <div className="my-3">
              <div>
                <h4>Email</h4>
                <CustomInput value="Jl. Kota Baru No.23, New York " type="email" id="editEmail" />
              </div>
            </div>
            <div className="my-3">
              <div>
                <h4>Password</h4>
                <CustomInput value="asa" type="password" id="editPassword" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(EditProfile);
