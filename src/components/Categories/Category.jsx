import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../../redux/api/apiSlice";

import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 99999,
  };

  const defaultParams = {
    ...defaultValues,
    categoryId: id,
  };

  const [category, setCategory] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === Number(id));

    setCategory(category.name);
  }, [id, list]);

  useEffect(() => {
    if (!id) return;

    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  const { data, isLoading, isSuccess } = useGetProductsQuery(params);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setParams({ ...params, ...values });
  };

  return (
    <section>
      <h2>{category}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
          />

          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="Price min"
          />

          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="Price max"
          />

          <button type="submit" hidden />
        </div>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : !isSuccess || !data.length ? (
        <div>
          <p>No result</p>
          <button type="click">Reset search</button>
        </div>
      ) : (
        <Products title="" products={data} amount={data.length} />
      )}
    </section>
  );
};

export default Category;
