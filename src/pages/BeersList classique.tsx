import { Link } from "react-router";
import { deleteBeer, getBeers } from "../services/beers.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Beer } from "../schemas/beer.schema";

const BeersList = () => {
  const { data: beers } = useQuery<Beer[]>({
    queryKey: ["beers"],
    queryFn: getBeers,
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteBeer(id),
    onMutate: (id: string) => {
      const oldCache = queryClient.getQueryData<Beer[]>(["beers"]);

      queryClient.setQueryData<Beer[]>(["beers"], (oldBeers) => {
        return oldBeers?.filter((beer) => beer._id !== id);
      });
      return { oldCache };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["beers"],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Beer[]>(["beers"], context?.oldCache);
    },
  });

  return (
    <div>
      <Link to="/beers/create">Create Beer</Link>
      <h1>Beers List</h1>
      {beers?.map((beer) => (
        <div key={beer._id}>
          <h2>{beer.name}</h2>
          <p>{beer.producer}</p>
          <p>{beer.degree}</p>
          <p>{beer.description}</p>
          <p>{beer.country}</p>
          <button onClick={() => mutation.mutate(beer._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BeersList;
