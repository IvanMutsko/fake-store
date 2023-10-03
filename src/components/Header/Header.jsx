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
    <>
      <p>Logo Header</p>
      <Link to={ROUTES.HOME}>Link at home</Link>
      <div>USER</div>

      <form>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            onChange={handleSearch}
            value={searchValue}
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

      <Link to={ROUTES.HOME}>Link at home</Link>
      <Link to={ROUTES.CART}>
        Link at cart <span>{cart.length}</span>
      </Link>
    </>
  );
};

export default Header;
