import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

import { removeItemAtFavorites } from "../../redux/favorites/favoritesSlice";
import Product from "../../models/Product";

import noResultsImg from "../../assets/images/no-results.png";

const Favorites: FC = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector(({ favorites }) => favorites);

  const removeItem = (item: Product) => {
    dispatch(removeItemAtFavorites(item.id));
  };

  return (
    <section className="py-10 px-5 w-full">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        Your favorites
      </h2>

      {!favorites.length ? (
        <div
          className="container h-96 bg-contain bg-no-repeat bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${noResultsImg})` }}
        ></div>
      ) : (
        <ul className="flex flex-col gap-4">
          {favorites.map((item: Product) => {
            const { id, title, images, price } = item;

            return (
              <li
                key={id}
                className="flex items-center w-full text-xl pb-4 border-b border-gray-500"
              >
                <div className="mr-auto">
                  <Link
                    to={`/products/${id}`}
                    className="block text-2xl mb-4 hover:text-orange-500"
                  >
                    {title}
                  </Link>

                  <img src={images[0]} alt={title} className="w-40" />
                </div>

                <div>
                  <p className="text-2xl text-center mr-6">Price: {price}$</p>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item)}
                  className="hover:text-orange-500 text-3xl"
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Favorites;
