import React from "react";

const Bottom = () => {
  return (
    <div className="bg-[#141414] h-[50vh] block  absolute">
      <div className="flex justify-around p-4 -mb-9 gap-x-10">
        <div className="flex justify-between ">
          <div className="">
            <div className="p-10 bg-black border-black shadow-md bg-opacity-30 h-fit w-fit rounded-xl ring-1 ring-white border-1">
              <p className="text-white text-md">Contact Us</p>
              <p className="mt-3 text-sm text-neutral-400 ">
                Sidemen Entertainment Limited 123 Fake Street London E1 4UD
                </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-10 bg-black border-black shadow-md bg-opacity-30 h-fit w-fit rounded-xl ring-1 ring-white border-1">
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
