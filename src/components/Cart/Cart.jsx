import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { sumBy } from "../../utils/common";
import { addItemToCart, removeItemToCart } from "../../redux/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (item) => {
    dispatch(removeItemToCart(item.id));
  };

  return (
    <section>
      <h2>Your cart</h2>

      {!cart.length ? (
        <p>Cart is empty...</p>
      ) : (
        <div>
          {cart.map((item) => {
            const { id, title, images, price, quantity } = item;

            return (
              <div key={id}>
                <div>
                  <h3>{title}</h3>
                  <img src={images[0]} alt={title} width="30px" />
                </div>

                <div>
                  <button
                    type="click"
                    onClick={() =>
                      changeQuantity(item, Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    type="click"
                    onClick={() => changeQuantity(item, quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div>
                  <p>Price: {price}$</p>
                  <p>Total: {price * quantity} $</p>
                </div>

                <button type="click" onClick={() => removeItem(item)}>
                  Delete
                </button>
              </div>
            );
          })}

          <div>
            <p>
              Total price:
              {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
