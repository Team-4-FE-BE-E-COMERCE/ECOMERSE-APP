import React from "react";
import Layout from "../components/Layout";
import { CardCart } from "../components/Card";
import { CustomButtonSatu } from "../components/CustomButton";
import { useTitle } from "../utils/redux/useTitle";

function CartDetail() {
  useTitle("My Cart");
  return (
    <Layout>
      <div className="flex flex-row fonr-poppins">
        <div className="basis-3/4">
          <div>
            <CardCart />
          </div>
        </div>
        <div className="basis-1/4 shadow-xl">
          <div className="flex flex-col justify-between w-full border h-full items-center p-5">
            <div>
              <h2 className="text-2xl font-bold">Prise Total</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Rp. 50000</h2>
            </div>
            <div className="border w-1/2">
              <CustomButtonSatu label="Buy" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartDetail;
