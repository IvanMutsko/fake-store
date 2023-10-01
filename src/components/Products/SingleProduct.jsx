/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { useGetProductQuery } from "../../redux/api/apiSlice";
import { getRelatedProducts } from "../../redux/products/productsSlice";
import { ROUTES } from "../../utils/routes";

import Product from "./Product";
import Products from "./Products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return (
    <section>
      {isSuccess ? (
        <>
          <Product {...data} />
          <Products products={related} amount={5} title="Related products" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default SingleProduct;
