import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";

function Header() {
  return (
    <nav className="relative flex  items-center justify-between px-2 py-3 bg-bgdasar mb-3 font-poppins">
      <div className="container flex justify-between  px-4 mx-auto items-center">
        <div className="font-bold text-2xl text-white">
          <h3>
            <strong>LOGO</strong>
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center">
            <div className=" xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span className="input-group-text flex items-center px-3  text-base  text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                  <div className="mx-1 text-white">
                    <AiOutlineSearch className="w-6 h-auto" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white">
          <div className="mx-4 ">
            <FaCartPlus className="w-6 h-auto" />
            {/* <button className="bg-white text-bgdasar font-bold py-1 px-4 rounded">Masuk</button> */}
          </div>
          <div className="mx-4">
            <CgProfile className="w-6 h-auto" />
            {/* <button className="bg-white text-bgdasar font-bold py-1 px-4 rounded">Daftar</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
