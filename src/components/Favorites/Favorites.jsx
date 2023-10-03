import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeItemAtFavorites } from "../../redux/favorites/favoritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector(({ favorites }) => favorites);

  const removeItem = (item) => {
    dispatch(removeItemAtFavorites(item.id));
  };

  return (
    <section>
      <h2>Your favorites</h2>

      {!favorites.length ? (
        <p>Favorites is empty...</p>
      ) : (
        <div>
          {favorites.map((item) => {
            const { id, title, images, price } = item;

            return (
              <div key={id}>
                <div>
                  <Link to={`/products/${id}`}>
                    <h3>{title}</h3>
                  </Link>

                  <img src={images[0]} alt={title} width="30px" />
                </div>

                <div>
                  <p>Price: {price}$</p>
                </div>

                <button type="click" onClick={() => removeItem(item)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Favorites;
