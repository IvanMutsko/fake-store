import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import Help from "../Help/Help";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.HELP} element={<Help />} />
    </Routes>
  );
};

export default AppRoutes;
