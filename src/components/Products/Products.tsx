import { FC } from "react";
import { Link } from "react-router-dom";

import ProductModel from "../../models/Product";

interface ProductsProps {
  title: string;
  products: ProductModel[];
  amount: number;
  grid: number;
}

const Products: FC<ProductsProps> = ({
  title,
  products = [],
  amount,
  grid,
}) => {
  const list = products.filter((_, idx) => idx < amount);

  return (
    <section className="py-10 px-5">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        {list.map(({ id, images, title, price }) => {
          return (
            <Link
              to={`/products/${id}`}
              key={id}
              className={`${grid === 5 ? "w-1/6" : "w-1/4"}   hover:scale-105`}
            >
              <div className="flex flex-col h-full">
                <img src={images[0]} alt={title} className="w-full " />
                <div className="p-4 flex flex-col justify-between h-full bg-slate-700 ">
                  <h3 className="mb-4 text-lg text-center font-semibold ">
                    {title}
                  </h3>
                  <p className="text-right">{price}$</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
