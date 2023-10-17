import React from "react";

import Poster from "../Poster/Poster";
import Category from "./Category";

const SingleCategory = () => {
  return (
    <div className="flex flex-col">
      <Poster />
      <Category />
    </div>
  );
};

export default SingleCategory;
