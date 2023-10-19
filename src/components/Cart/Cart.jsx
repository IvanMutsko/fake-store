import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi2";
import {MdDeleteForever}from 'react-icons/md'

import { sumBy } from "../../utils/common";
import { addItemToCart, removeItemAtCart } from "../../redux/cart/cartSlice";

import noResultsImg from "../../assets/images/no-results.png";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(({ cart }) => cart);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (item) => {
    dispatch(removeItemAtCart(item.id));
  };

  return (
    <section className="py-10 px-5 w-full">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        Your cart
      </h2>

      {!cart.length ? (
        <div
          className="container h-96 bg-contain bg-no-repeat bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${noResultsImg})` }}
        ></div>
      ) : (
        <ul className="flex flex-col gap-4">
          {cart.map((item) => {
            const { id, title, images, price, quantity } = item;

            return (
              <li
                key={id}
                className="flex items-center w-full text-xl pb-4 border-b border-gray-500"
              >
                <div className="mr-auto">
                  <Link
                    to={`/products/${id}`}
                    className="block text-2xl mb-4 hover:text-orange-500"
                  >
                    {title}
                  </Link>

                  <img src={images[0]} alt={title} className="w-40" />
                </div>

                <div className="flex flex-col-reverse mr-6">
                  <button
                    type="click"
                    onClick={() =>
                      changeQuantity(item, Math.max(1, quantity - 1))
                    }
                    className="hover:text-orange-500 text-4xl"
                  >
                    <HiOutlineMinusCircle />
                  </button>
                  <p className="text-orange-500 text-2xl text-center">
                    {quantity}
                  </p>
                  <button
                    type="click"
                    onClick={() => changeQuantity(item, quantity + 1)}
                    className="hover:text-orange-500 text-4xl"
                  >
                    <HiOutlinePlusCircle />
                  </button>
                </div>

                <div className="mr-24">
                  <p>Price: {price}$</p>
                  <p>Total: {price * quantity} $</p>
                </div>

                <button
                  type="click"
                  onClick={() => removeItem(item)}
                  className="hover:text-orange-500 text-3xl"
                >
                  <MdDeleteForever/>
                </button>
              </li>
            );
          })}

          <div>
            <p className="text-orange-500 text-3xl text-end">
              Total price:{" "}
              {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
            </p>
          </div>
        </ul>
      )}
    </section>
  );
};

export default Cart;
