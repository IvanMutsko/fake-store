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
      <div>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
