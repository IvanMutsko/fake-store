import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";

import { useGetProductsQuery } from "../../redux/api/apiSlice";

import Products from "../Products/Products";

import noResultsImg from "../../assets/images/no-results.png";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 1, //API bug. When zero - returns all results
    price_max: 99999,
  };

  const defaultParams = {
    ...defaultValues,
    limit: 10,
    offset: 0,
    categoryId: id,
  };

  const [isEnd, setEnd] = useState(false);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;
    if (!data.length) return setEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === Number(id));

    setCategory(category);
  }, [id, list]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleResetFilter = () => {
    setEnd(false);
    setValues(defaultValues);
    setParams(defaultParams);
  };

  return (
    <section className="py-10 px-5">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        {category?.name}
      </h2>

      <div className="flex flex-col items-center gap-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Product name"
              value={values.title}
              className="w-1/3 text-gray-900 bg-slate-300 font-semibold px-4 py-2 text-xl border-none rounded-md hover:bg-slate-200"
            />

            <input
              type="number"
              name="price_min"
              onChange={handleChange}
              placeholder="Price min"
              value={values.price_min === 1 ? "" : values.price_min}
              className="w-1/6 text-gray-900 bg-slate-300 font-semibold px-4 py-2 text-xl border-none rounded-md hover:bg-slate-200"
            />

            <input
              type="number"
              name="price_max"
              onChange={handleChange}
              placeholder="Price max"
              value={values.price_max === 99999 ? "" : values.price_max}
              className="w-1/6 text-gray-900 bg-slate-300 font-semibold px-4 py-2 text-xl border-none rounded-md hover:bg-slate-200"
            />

            <button type="submit" hidden />
          </div>
        </form>

        <button
          type="click"
          onClick={handleResetFilter}
          className="px-6 py-2 bg-slate-500 text-xl font-semibold border-none rounded-lg hover:text-orange-500 hover:bg-slate-600"
        >
          Reset filter
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="rgb(249, 115, 22)"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : !isSuccess || !items.length ? (
        <div
          className="container h-96 bg-contain bg-no-repeat bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${noResultsImg})` }}
        ></div>
      ) : (
        <Products title="" products={items} amount={items.length} />
      )}

      {!isEnd && (
        <button
          type="click"
          onClick={() =>
            setParams({ ...params, offset: params.offset + params.limit })
          }
          className="block ml-auto mr-auto px-8 py-2 bg-slate-500 text-2xl font-semibold border-none rounded-lg hover:text-orange-500 hover:bg-slate-600"
        >
          Load more...
        </button>
      )}
    </section>
  );
};

export default Category;
