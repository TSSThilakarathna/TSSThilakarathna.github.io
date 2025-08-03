import React from 'react';

function UpcomingEvents() {
  return (
    <div className="relative top-[350px] flex justify-center px-4">
      <div className="w-[450px] max-w-[560px] bg-[#131929] p-8 sm:p-10 md:p-10 rounded-[20px] sm:rounded-[30px] text-center md:text-left">
        <h1 className="text-[#DCD5EB] text-[16px] sm:text-[18px] font-semibold ">
          Upcoming Projects 🚀
        </h1>
        <p className="text-[#DCD5EB] text-[15px] sm:text-[16px]  mt-4 text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;I will conduct a research project at the end of this year to explore and analyze important topics in my field. This study aims to contribute new insights and solutions that can benefit both academics and practitioners.        </p>

        <ul className="list-disc list-inside mt-6 text-[#DCD5EB] text-[15px] sm:text-[16px] space-y-2">
          <li>
            <strong>Submit Date</strong> End of 2025
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UpcomingEvents;
