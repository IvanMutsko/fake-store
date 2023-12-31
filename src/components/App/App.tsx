import { FC, useEffect } from "react";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import { getCategories } from "../../redux/categories/categoriesSlice";
import { getProducts } from "../../redux/products/productsSlice";
import { useAppDispatch } from "../../hooks/hooks";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-gray-800 text-gray-200 grow">
        <div className="flex container max-w-7xl mx-auto">
          <Sidebar />
          <AppRoutes />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
