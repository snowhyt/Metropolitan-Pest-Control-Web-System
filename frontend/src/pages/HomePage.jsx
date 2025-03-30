import React from "react";
import Carousel from "../components/carousel.jsx";
function HomePage() {
  return (
    <div>
      <div className="bg-blue-400 pb-20 pt-20">
        <div className="text-center text-[50px] text-white font-bold font-sans">
          <h1>Company's Tagline</h1>
        </div>
        <div className="text-center text-white font-sans">
          <p>
            Following is the complete list of quality services that are designed
            to suit the requirements of MPCC's valued client F
          </p>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a className="btn">Learn More</a>
          <a className="btn">Book Now!</a>
        </div>
      </div>
      <div>
        <div className="text-center text-[30px] text-blue-400 font-bold font-serif mb-10">
          <h1>Our Company</h1>
        </div>
        <div className="flex flex-row mx-5 md:mx-10 lg:mx-20 gap-10">
          <div className="border-2 border-gray-300 p-8 rounded-lg flex-1">
            <p className="text-gray-700 leading-relaxed">
              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry. We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition. Since 1997,meet and exceed industry expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Metropolitan Pest Control Corporation utilizes state-of-the-art
              equipment and the latest technology in the industry. We use only
              FDA-approved insecticides and chemicals to ensure responsible
              disposition. Since 1997,meet and exceed industry expectations.
            </p>
            <a className="btn bg-blue-400 text-white pt-2 rounded-md mt-6 inline-block hover:bg-blue-500 transition duration-300">
              Learn More
            </a>
          </div>
          <div className="border-2 border-gray-300 rounded-lg flex-1">
            <img src="/logo.png" alt="Company Image" className="w-100 h-50" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomePage

