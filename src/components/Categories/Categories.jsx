import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ title, categories = [] }) => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl text-center text-orange-500 uppercase mb-10">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map(({ id, image, name }) => {
          return (
            <Link
              to={`/categories/${id}`}
              key={id}
              className="w-1/4 hover:scale-105"
            >
              <div className="relative flex flex-col h-full w-full border-none rounded-xl overflow-hidden">
                <img src={image} alt={name} className="w-full" />
                <h3 className="absolute top-1 left-2 text-orange-500 uppercase font-semibold text-2xl drop-shadow-4xl">
                  {name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
