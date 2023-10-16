import React from "react";

import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="container h-96 bg-contain bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    ></section>
  );
};

export default Banner;
