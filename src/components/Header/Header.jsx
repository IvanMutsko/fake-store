import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "../../utils/routes";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { cart } = useSelector(({ cart }) => cart);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  return (
    <header className="w-full py-5 px-10 flex justify-center border-b border-b-gray-500 border-solid bg-gray-900 ">
      <div className="flex justify-between content-between container max-w-7xl ml-auto mr-auto">
        <Link
          to={ROUTES.HOME}
          className="text-4xl font-bold text-orange-500 p-3"
        >
          Fake store
        </Link>

        <div className="flex items-center gap-24">
          <form>
            <div>
              <input
                type="search"
                name="search"
                placeholder="Search..."
                autoComplete="off"
                onChange={handleSearch}
                value={searchValue}
                className="text-gray-600 font-semibold px-4 py-1 text-xl border rounded-md"
              />
            </div>
            {searchValue && (
              <div>
                Preview-box with search items
                {isLoading ? (
                  <p>Loading...</p>
                ) : !data.length ? (
                  <p>No results</p>
                ) : (
                  data.map(({ title, images, id }) => {
                    return (
                      <Link
                        to={`/products/${id}`}
                        onClick={() => setSearchValue("")}
                        key={id}
                      >
                        <div>
                          <img src={images[0]} alt={title} width="20px" />
                          <h3>{title}</h3>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
            )}
          </form>
          <div className="flex items-center gap-14 text-gray-400 font-semibold text-2xl">
            <Link
              to={ROUTES.HOME}
              className="inline-block py-1 border-b-4 border-transparent hover:text-gray-300 hover:border-gray-300"
            >
              Home
            </Link>
            <Link
              to={ROUTES.FAVORITES}
              className="inline-block py-1 border-b-4 border-transparent hover:text-gray-300 hover:border-gray-300"
            >
              Favorites
            </Link>
            <Link
              to={ROUTES.CART}
              className="inline-block py-1 border-b-4 border-transparent hover:text-gray-300 hover:border-gray-300"
            >
              Cart <span>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
