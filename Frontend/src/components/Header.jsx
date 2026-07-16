import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
        {props.h1} <span className="text-blue-700 text-5xl">{props.h2}</span>
      </h1>
    </div>
  );
};

export default Header;
