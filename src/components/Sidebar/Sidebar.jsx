import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className="text-2xl font-semibold text-orange-500 p-5 flex flex-col justify-between w-1/5">
      <nav>
        <h1 className="mb-6 text-3xl font-light">Categories:</h1>
        <ul className="flex flex-col gap-3">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/categories/${id}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "active" : ""
                  } inline-block w-full cursor-pointer hover:text-gray-300`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link
          to={ROUTES.HELP}
          className="inline-block w-full mt-auto hover:text-gray-300"
        >
          Help
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
