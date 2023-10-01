import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Header = () => {
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
            onChange={() => {}}
            value=""
          />
        </div>
        <div>Preview-box with search items</div>
      </form>

      <Link to={ROUTES.HOME}>Link at home</Link>
      <Link to={ROUTES.CART}>
        Link at cart <span>2</span>
      </Link>
    </>
  );
};

export default Header;
