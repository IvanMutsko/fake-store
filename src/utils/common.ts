import Product from "../models/Product";

export const shuffle = (arr: Product[]) =>
  [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = (url: string, params: string) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], idx) => {
    const sign = !idx ? "?" : "&";

    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};

export const sumBy = (arr: number[]) =>
  arr.reduce((prev, cur) => prev + cur, 0);
