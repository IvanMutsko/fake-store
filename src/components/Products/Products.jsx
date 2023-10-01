import React from "react";
import { Link } from "react-router-dom";

const Products = ({ title, products = [], amount }) => {
  const list = products.filter((_, idx) => idx < amount);

  return (
    <section>
      <h2>{title}</h2>

      {list.map(({ id, images, title, price }) => {
        return (
          <Link to={`/products/${id}`} key={id}>
            <div>
              <img src={images[0]} alt={title} width="40px" />
              <h2>{title} - product item</h2>
              <p>{price}$</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Products;
