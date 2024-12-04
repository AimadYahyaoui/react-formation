import { createContext, useEffect, useState } from "react";
import { Beer } from "../schemas/beer.schema";
import { deleteBeer, getBeers } from "../services/beers.service";

type BeerContextType = {
  beers: Beer[];
  deleteBeerById: (id: string) => void;
  refetch: () => void;
};

export const BeerContext = createContext<BeerContextType>(
  {} as BeerContextType
);

type BeerContextProviderProps = {
  children: React.ReactNode;
};
const BeerContextProvider = ({ children }: BeerContextProviderProps) => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getBeers().then((response) => {
      console.log(response);
      setBeers(response);
    });
  }, [refresh]);

  const deleteBeerById = async (id: string) => {
    console.log(id);
    await deleteBeer(id);
    setBeers(beers.filter((beer) => beer._id !== id));
  };
  return (
    <BeerContext.Provider
      value={{
        beers,
        deleteBeerById,
        refetch: () => {
          setRefresh(!refresh);
        },
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};

export default BeerContextProvider;
