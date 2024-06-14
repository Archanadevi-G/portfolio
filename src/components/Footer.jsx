import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-base p-4 text-center text-white ">
      Copyright © {currentYear} Archanadevi. All Rights reserved.
      <button
        onClick={scrollToTop}
        className="text-green-600 text-2xl right-4 z-10 animate-bounce absolute "
      >
        <ion-icon name="chevron-up-circle-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Footer;
