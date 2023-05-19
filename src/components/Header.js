import React from "react";
import Logo from "../assets/logo.svg";
import CV from "../assets/cv.pdf";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Lizzy Truong Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <button onClick={handleDownload} className="btn btn-sm ">
            Download my CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
