import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

import { filterByPrice } from "../../redux/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { list, filtered } = useSelector(({ products }) => products);
  const categories = useSelector(({ categories }) => categories);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <div className="container w-full">
      <Poster />
      <Products products={list} amount={5} title={"Top products"} grid={5} />
      <Categories categories={categories.list} title={"Goods by categories"} />
      <Banner />
      <Products
        products={filtered}
        amount={5}
        title={"Products less than 100$"}
      />
    </div>
  );
};

export default Home;
