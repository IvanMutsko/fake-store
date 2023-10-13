import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className="text-xl font-semibold text-orange-500 p-3 flex flex-col justify-between">
      <h1>Categories</h1>
      <nav>
        <ul className="flex flex-col gap-3">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/categories/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "active" : ""
                  } inline-block w-full cursor-pointer`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link to={ROUTES.HELP} className="inline-block w-full mt-auto">
          Help
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
