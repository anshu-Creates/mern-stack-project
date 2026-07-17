import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center font-mono text-center p-10">
      <div className="w-100 flex flex-col items-center">
        <img src="/src/assets/logo.jpeg" className="rounded-full h-30 w-40 my-5" alt="logo" />
        <div className="text-blue-800 font-mono">
          <p>
            <span className="font-bold text-blue-900">Address : </span>
            Thane(West), 400610
          </p>
          <p>
            <span className="font-bold text-blue-900">Phone : </span>+91 98765
            43210 / +91 98765 43210
          </p>
          <p>
            <span className="font-bold text-blue-900">Email : </span>
            xyz123@abc.com
          </p>
        </div>
      </div>
      <div className='w-100'>
        <h4 className="text-2xl text-center mb-2 text-blue-900 font-bold">
          About Us
        </h4>
        <p className="text-center text-blue-800">
          Welcome to Balaji Repair & Services, where innovation meets excellence. We are a passionate team dedicated to providing top-notch Washing Machine, Microwave, Fridge, AC Repair. Our mission is to deliver high-quality solutions that cater to your needs, ensuring efficiency, reliability and satisfaction. With a team of skilled professionals and years of experience, we strive to stay ahead of industry.
        </p>
      </div>
      <div className='w-75'>
        <h4 className="text-2xl text-center mb-2 text-blue-900 font-bold">
           Quick Links
        </h4>
        <ul className="text-blue-800">
          <li>Washing Machine Service</li>
          <li>Microwave Service</li>
          <li>AC Service</li>
          <li>Fridge Service</li>
          <li>Other Services & Queries</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
