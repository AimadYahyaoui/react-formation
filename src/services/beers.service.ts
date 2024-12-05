import httpClient from "../lib/http-client";
import { Beer } from "../schemas/beer.schema";

export const createBeer = async (beer: Omit<Beer, "_id">) => {
  const data = await httpClient.post("/beers", beer);
  return data;
};

export const getBeers = async () => {
  const data = await httpClient.get("/beers");
  return data.data;
};

export const getBeer = async (id: string) => {
  const data = await httpClient.get(`/beers/${id}`);
  return data;
};

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const deleteBeer = async (id: string) => {
  await waitFor(2000);
  throw new Error("Error");
  const data = await httpClient.delete(`/beers/${id}`);
  return data;
};
