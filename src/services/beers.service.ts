import httpClient from "../lib/http-client";

export const createBeer = async (beer: any) => {
  const data = await httpClient.post("/beers", beer);
  return data;
};
