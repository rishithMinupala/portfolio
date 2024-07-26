import React from "react";

const Exp = () => {
  return (
    <div className=" bg-white border-t-2 pt-3 pb-3 flex flex-col" id="exp">
      <h1 className="text-3xl  text-center mb-8 text-blue-600 font-semibold">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row  justify-between items-center border-t-2 border-b-2 pb-4 mt-2">
        <div className="flex flex-col w-[100%] self-center order-2 md:order-1 md:p-5 p-2">
          <h1 className="font-semibold text-2xl text-blue-600">
            React Plugin developer
          </h1>
          <p className="">Mr.zerocode.ai </p>
          <p className="">Internship</p>
          <p className="">Feb 2024 - July 2024</p>

          <p className="text-gray-500">
            I worked as an intern developing React plugin Smart Blocks and added
            value to the company.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464822759023-fed622ff2c3b%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D3540%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=2048&q=75"
          alt=""
          className="min-w-[375px] h-[300px] self-stretch order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default Exp;
