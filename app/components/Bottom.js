import React from "react";

const Bottom = () => {
  return (
    <div className="bg-black h-[50vh] block bg-opacity-80  absolute  w-[100%]">
      <div className="flex justify-around p-4 -mb-9 gap-x-10">
        <div className="flex justify-between ">
          <div className="">
            <div className="flex justify-center p-10 border-black shadow-md bg-neutral-900/5 bg-opacity-30 h-fit w-fit rounded-xl ring-1 ring-white border-1 ">
              <div>
              <p o>Sidemen.com</p>
              <p>Merch</p>
              <p>sides</p>
              <p>Contact</p>
              </div>
              <div className="">
              <p>Cookies</p>
              <p>Privacy Policy</p>
              <p>Terms and conditions</p>
              <p>Arcade Media</p>
            </div>
            </div>
            
          </div>
        </div>
        <div className="">
          <div className="p-10 border-black shadow-md bg-neutral-900/10 h-fit w-fit rounded-xl ring-1 ring-white border-1">
            <p className="text-white text-md">Latest News</p>
            <p className="mt-3 text-sm text-neutral-400 ">
              Chuck your emial in here to stay up to date with all things
              Sidemen, direct to your inbox
            </p>
            <input
              className="p-3 placeholder:p-0 bg-neutral-600/10 hover:border-2 hover:border-blue-700 w-fit"
              placeholder="Enter your email address"
            ></input>
            <p className="mt-4 text-sm opacity-50 text-gray-900/2">
              By entering your email you hereby accept our terms and conditions
            </p>
          </div>
        </div>
      </div>
      <p className="p-10 mt-20 bg-[#141414]">
        Copyright Sidemen Entertainment Limited All Rights Reserved TM 2025 -
        <a
          className="text-white "
          href="http://www.protfolio-3d-rudra.vercel.app"
        >
          {" "}
          Site by Rudra Manikanta
        </a>
      </p>
    </div>
  );
};

export default Bottom;
