import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path, paddingSizeY }) => {
  return (
    <Link to={path}>
      <button
        className={`block w-full border border-primary ${paddingSizeY} text-center text-white bg-primary rounded-b hover:bg-transparent hover:text-primary transition`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
