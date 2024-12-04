import { create } from "zustand";
import { Beer } from "../schemas/beer.schema";
import { createBeer, deleteBeer } from "../services/beers.service";
import { persist, createJSONStorage } from "zustand/middleware";

type BeerStore = {
  beers: Beer[];
  setBeers: (beers: Beer[]) => void;
  addBeer: (beer: Omit<Beer, "_id">) => Promise<void>;
  deleteBeer: (id: string) => void;
};

const useBeersStore = create(
  persist<BeerStore>(
    (set) => ({
      beers: [],
      setBeers: (beers) => set({ beers }),
      addBeer: async (beer) => {
        const response = await createBeer(beer);
        set((state) => ({ beers: [...state.beers, response.data] }));
      },
      deleteBeer: (id) =>
        deleteBeer(id).then(() =>
          set((state) => ({
            beers: state.beers.filter((beer) => beer._id !== id),
          }))
        ),
    }),
    {
      name: "beer-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useBeersStore;
