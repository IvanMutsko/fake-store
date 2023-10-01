import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ title, categories = [] }) => {
  return (
    <section>
      <h2>{title}</h2>

      {categories.map(({ id, image, name }) => {
        return (
          <Link to={`/categories/${id}`} key={id}>
            <div>
              <img src={image} alt={name} width="40px" />
              <h3>{title} - product item</h3>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Categories;
