import React from "react";

const Footer = () => {
  return (
    <footer className="py-1">
      <p className="text-center mt-1">{`© ${new Date().getFullYear()} book it.`}</p>
    </footer>
  );
};

export default Footer;
