import { FC } from "react";

import poster from "../../assets/images/poster.jpg";

const Poster: FC = () => {
  return (
    <section
      className="container w-full h-96 bg-gradient-to-r from-gray-900 to-gray-700 bg-cover flex items-center justify-center border-none rounded-b-4xl"
      style={{ backgroundImage: `url(${poster})` }}
    >
      <h2 className="text-6xl text-orange-500 font-bold uppercase drop-shadow-3xl">
        Big sale up to 30% off
      </h2>
    </section>
  );
};

export default Poster;
