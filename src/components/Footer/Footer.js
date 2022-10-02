import React from "react";
import "./Footer.css";

const Footer = () => {
  const newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <div className="footer">
      <h1>Copyright @ {year}</h1>
    </div>
  );
};

export default Footer;
