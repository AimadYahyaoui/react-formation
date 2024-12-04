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
