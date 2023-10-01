import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section>
      <h1>Categories</h1>
      <nav>
        <ul>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/categories/${id}`}
                className={({ isActive }) => `${isActive ? "active" : ""}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link to={ROUTES.HELP}>Link at help info</Link>
      </div>
    </section>
  );
};

export default Sidebar;
