import React from "react";

import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section className="w-full shadow-3xl mb-20">
      <img src={banner} alt="banner" className="h-full object-contain" />
    </section>
  );
};

export default Banner;
