import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import { addItemToCart, addItemToFavorites } from "../../redux/user/userSlice";

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
    <section>
      <div>
        General photo
        <img src={currentImage} alt="" width="100px" />
      </div>
      <div>
        {images.map((image, idx) => (
          <img
            src={image}
            alt=""
            key={idx}
            onClick={() => {
              setCurrentImage(image);
            }}
            width="40px"
          />
        ))}
      </div>
      <h2>{title}</h2>
      <p>{price}$</p>
      <p>{description}</p>
      <div>
        <button type="button" onClick={addToCart}>
          Add to cart
        </button>
        <button type="button" onClick={addToFavorites}>
          Add to favorites
        </button>
      </div>
      <Link to={ROUTES.HOME}>Go back to store</Link>
    </section>
  );
};

export default Product;
