import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import { getCategories } from "../../redux/categories/categoriesSlice";
import { getProducts } from "../../redux/products/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-800 text-gray-200 flex justify-center">
        <div className="flex container w-7xl">
          <Sidebar />
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
