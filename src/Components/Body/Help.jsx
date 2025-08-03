import React from 'react';

function Help() {
  return (
    <>
      <div className="relative top-[350px] flex flex-col md:flex-row items-center justify-center sm:px-8 md:px-20 lg:px-32 py-20 md:py:10 ">
        <div className="w-full sm:max-w-[90%] md:w-[776px]  text-[#DCD5EB] h-auto p-8 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] text-center md:text-left relative ">

          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FED035]">
            How I can help you?
          </h1>

          <div className="flex flex-col md:flex-row gap-19 sm:gap-8 md:gap-10 mt-10 justify-center ">
            {/* Web Developer Section */}
            <div className="flex-1">
              <h1 className="text-[15px] md:text-[20px]">As a Web developer</h1>
              <div className="mt-2 border border-[#DCD5EB] rounded-lg px-4 py-2 text-[10px] md:text-[12px] w-fit mx-auto md:mx-0">
                Starting from $100
              </div>
              <p className="text-sm sm:text-base md:text-lg mt-4 text-[#928D9B] ">
                Want a fast, modern website that converts? I’ll build responsive, high-performance web apps tailored to your brand.
              </p>
            </div>

            {/* UI/UX Designer Section */}
            <div className="flex-1">
              <h1 className="text-[15px] md:text-[20px]">As a UI/UX Designer</h1>
              <div className="mt-2 border border-[#DCD5EB] rounded-lg px-4 py-2 text-[10px] md:text-[12px] w-fit mx-auto md:mx-0">
                Starting from $40
              </div>
              <p className="text-sm sm:text-base md:text-lg mt-4 text-[#928D9B]">
                Need a clean and user-friendly design? I’ll craft engaging interfaces that enhance user experience and reflect your brand’s identity.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[200px] sm:w-[230px] md:w-[262px] h-auto flex flex-col items-center mt-10  md:ml-10 bg-[#131929] rounded-[20px]">
          <img
            src="public/sachin_thilakarathna_image3.png"
            alt="1stimage"
            className="w-full h-auto rounded-[20px]"
          />
        </div>
      </div>
    </>
  );
}

export default Help;
