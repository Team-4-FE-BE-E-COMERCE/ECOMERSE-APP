import Layout from "../components/Layout";
import React from "react";
import CustomInput from "../components/CustomInput";
import { CustomButtonSatu } from "../components/CustomButton";
import { useTitle } from "../utils/redux/useTitle";
import { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";

function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [code, setCode] = useState("");
  const [paymentName, setPaymentName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paymentCode, setPaymentCode] = useState("");
  const [disabled, setDisabled] = useState(true);
  useTitle("Order");

  useEffect(() => {
    if (street || city || code || paymentName || cardNumber || paymentCode || province) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [street, city, province, code, paymentName, cardNumber, paymentCode]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      street,
      city,
      province,
      code,
      paymentName,
      cardNumber,
      paymentCode,
    };
    axios.post("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/orders", body);
    then((res) => {
      const { message, data } = res.data;
      console.log(res);
      navigate("/history");
      alert(message);
    })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className=" flex justify-center">
        <form className="border border-bgdasar font-poppins  text-hitam    h-full w-[55rem]  flex flex-wrap justify-center mb-10 " onSubmit={(e) => handleSubmit(e)}>
          <div className="py-16 mt-1">
            <div className="mb-3">
              <p>Alamat Pengirim</p>
            </div>

            <div className="  flex flex-wrap justify-center border border-bgdasar h-[22rem] w-[45rem] ">
              <div className="text-center py-10 w-[35rem]  ">
                <div>
                  <div className="flex flex-col  w-full mb-7  text-white">
                    <CustomInput id="input-jalan" type="jalan" placeholder="Jln....." onChange={(e) => setStreet(e.target.value)} />
                  </div>
                  <div className="flex flex-col  w-full  mb-7 text-white">
                    <CustomInput id="input-kabupaten" type="Kabupaten" placeholder="Kabupaten / Kota" onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div className="flex flex-col  w-full  mb-7 text-white">
                    <label for="countries" class="block mb-2 text-sm font-medium text-hitam dark:text-gray-400"></label>
                    {/* <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-hitam text-sm rounded focus:ring-bgdasar focus:border-bgdasar block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgdasar dark:focus:border-bg"
                      onChange={(e) => setProvince(e.target.value)}
                    >
                      <option selected>Provinsi</option>
                      <option value="JB">Jawa Barat</option>
                      <option value="JT">Jawa Timur</option>
                      <option value="JTT">Jawa Tengah</option>
                      <option value="SUL-TENG">Sulawesi Tengah</option>
                      <option value="SUL-SEL">Sulawesi Selatan</option>
                      <option value="SUL-BAR">Sulawesi Barat</option>
                    </select> */}
                  </div>
                  <div className="flex flex-col  w-full  mb-7 text-white">
                    <CustomInput id="input-kodepos" type="kodepos" placeholder="Kode" onChange={(e) => setCode(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* kartuKredit */}
          <div className="py-16 mt-1">
            <div className="mb-3">
              <p>kartu Kredit</p>
            </div>

            <div className="  flex flex-wrap border border-bgdasar justify-center h-[22rem] w-[45rem] ">
              <div className="text-center py-10  w-[35rem]  ">
                <div>
                  <div className="flex flex-col  w-full mb-7  text-white">
                    <CustomInput id="input-Visa" type="Visa" placeholder="Visa" onChange={(e) => setPaymentName(e.target.value)} />
                  </div>
                  <div className="flex flex-col  w-full  mb-7 text-white">
                    <CustomInput id="input-namekartu" type="namekartu" placeholder="Nama Di Kartu Kredit" />
                  </div>
                  {/* Nomor Rekening */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col  w-full   mb-7 text-white">
                      <CustomInput id="input-norekening" type="norekening" placeholder="Nomor Rekening" onChange={(e) => setCardNumber(e.target.value)} />
                    </div>
                    <div>
                      <div className="flex flex-col  w-full  mb-7 text-white">
                        <CustomInput id="input-norekening" type="norekening" placeholder="Nomor Rekening" onChange={(e) => setPaymentCode(e.target.value)} />
                      </div>
                    </div>
                    <p className="mt-4">Data Kadaluarsa</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col  w-full  mb-7 text-white">
                        <label for="countries" class="block mb-2 text-sm font-medium text-hitam dark:text-gray-400"></label>
                        {/* <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-hitam text-sm rounded focus:ring-bgdasar focus:border-bgdasar block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgdasar dark:focus:border-bg"
                        >
                          <option selected>Bulan</option>
                          <option value="JB">Jawa Barat</option>
                          <option value="JT">Jawa Timur</option>
                          <option value="JTT">Jawa Tengah</option>
                          <option value="SUL-TENG">Sulawesi Tengah</option>
                          <option value="SUL-SEL">Sulawesi Selatan</option>
                          <option value="SUL-BAR">Sulawesi Barat</option>
                        </select> */}
                      </div>
                      <div className="flex flex-col  w-full  mb-7 text-white">
                        <label for="countries" class="block mb-2 text-sm font-medium text-hitam dark:text-gray-400"></label>
                        {/* <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-hitam text-sm rounded focus:ring-bgdasar focus:border-bgdasar block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgdasar dark:focus:border-bg"
                        >
                          <option selected>Tahun</option>
                          <option value="JB">Jawa Barat</option>
                          <option value="JT">Jawa Timur</option>
                          <option value="JTT">Jawa Tengah</option>
                          <option value="SUL-TENG">Sulawesi Tengah</option>
                          <option value="SUL-SEL">Sulawesi Selatan</option>
                          <option value="SUL-BAR">Sulawesi Barat</option>
                        </select> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 mt-1">
            <div className="mb-4">
              <p className="">Tampilan Barang Yang Di Pesan</p>
            </div>
            <div className="  flex flex-wrap justify-center border border-bgdasar h-[15rem] w-[45rem] ">
              <div className="mt-14 ">
                <p className=" mb-5">Jumlah Barang Yang Dipesan : 1 </p>
                <p className=" mb-5">Pengiriman : Gratis </p>
                <p className=" mb-5">harga Total : Rp.50.000 </p>
              </div>
            </div>
            <div className="mt-7 grid grid-cols-3">
              <div></div>
              <div></div>
              <div className="flex">
                <CustomButtonSatu label="Beli" loading={loading || disabled} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Order;
