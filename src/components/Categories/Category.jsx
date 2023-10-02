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

  return (
    <section>
      <h2>{category?.name}</h2>

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
      ) : !isSuccess || !items.length ? (
        <div>
          <p>No result</p>
          <button type="click">Reset search</button>
        </div>
      ) : (
        <Products title="" products={items} amount={items.length} />
      )}

      {!isEnd && (
        <button
          type="click"
          onClick={() =>
            setParams({ ...params, offset: params.offset + params.limit })
          }
        >
          Load more...
        </button>
      )}
    </section>
  );
};

export default Category;
