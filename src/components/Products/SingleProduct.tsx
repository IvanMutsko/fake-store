/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import { useGetProductQuery } from "../../redux/api/apiSlice";
import { getRelatedProducts } from "../../redux/products/productsSlice";
import { ROUTES } from "../../utils/routes";

import Product from "./Product";
import Products from "./Products";

const SingleProduct: FC = () => {
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
    <section className="py-10 px-5 w-full">
      {isSuccess ? (
        <>
          <Product {...data} />
          <Products
            products={related}
            amount={5}
            title="Related products"
            grid={5}
          />
        </>
      ) : (
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
      )}
    </section>
  );
};

export default SingleProduct;
