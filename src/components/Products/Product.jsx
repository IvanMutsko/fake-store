import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import { addItemToCart } from "../../redux/cart/cartSlice";
import { addItemToFavorites } from "../../redux/favorites/favoritesSlice";

const Product = (item) => {
  const { title, images, price, description } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  const addToFavorites = () => {
    dispatch(addItemToFavorites(item));
  };

  return (
    <section className="flex flex-col px-6">
      <div className="flex mb-4">
        <img src={currentImage} alt="" className="w-1/2 mr-4" />
        <div className="flex flex-col justify-between">
          {images.map((image, idx) => (
            <img
              src={image}
              alt=""
              key={idx}
              onClick={() => {
                setCurrentImage(image);
              }}
              className="w-1/3"
            />
          ))}
        </div>
      </div>

      <h2 className="text-orange-500 text-5xl mb-2">{title}</h2>
      <p className="text-orange-500 text-3xl mb-4">{price}$</p>
      <p className="w-2/3 mb-10 text-2xl tracking-widest">{description}</p>
      <div className="flex justify-end gap-8 mb-4 ">
        <button
          type="button"
          onClick={addToCart}
          className="block px-8 py-2 bg-slate-500 text-2xl font-semibold border-none rounded-lg hover:text-orange-500 hover:bg-slate-600"
        >
          Add to cart
        </button>
        <button
          type="button"
          onClick={addToFavorites}
          className="block px-8 py-2 bg-slate-500 text-2xl font-semibold border-none rounded-lg hover:text-orange-500 hover:bg-slate-600"
        >
          Add to favorites
        </button>
      </div>
      <Link
        to={ROUTES.HOME}
        className="ml-auto text-orange-500 text-lg hover:text-gray-300"
      >
        Go back to store
      </Link>
    </section>
  );
};

export default Product;
