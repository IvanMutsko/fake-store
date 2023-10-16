import React from "react";
import { Link } from "react-router-dom";

const Products = ({ title, products = [], amount }) => {
  const list = products.filter((_, idx) => idx < amount);

  return (
    <section className="py-10 px-5">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        {title}
      </h2>
      <div className="flex space-x-4 justify-center">
        {list.map(({ id, images, title, price }) => {
          return (
            <Link
              to={`/products/${id}`}
              key={id}
              className="w-1/5 hover:scale-105"
            >
              <div className="flex flex-col h-full ">
                <img src={images[0]} alt={title} className="w-full " />
                <div className="p-4 flex flex-col justify-between h-full bg-slate-700 ">
                  <h3 className="mb-4 text-lg text-center font-semibold ">
                    {title}
                  </h3>
                  <p className="text-right">{price}$</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
