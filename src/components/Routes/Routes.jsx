import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import SingleCategory from "../Categories/SingleCategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    </Routes>
  );
};

export default AppRoutes;
