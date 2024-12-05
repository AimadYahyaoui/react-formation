import { useQuery } from "@tanstack/react-query";
import useFetch from "../hooks/useFetch";
import { Fragment, useState } from "react";
type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const getPlanets = async (page = 1) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  return response.json();
};

function PlanetList() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery<PlanetResponse>({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
    staleTime: 5000,
    refetchInterval: 60000 * 10,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )}
      <p>bienvenue</p>
      {data?.results.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <p>name : {planet.name}</p>
            <p>rotation_period : {planet.rotation_period}</p>
          </Fragment>
        );
      })}
      <button disabled={!data?.previous} onClick={() => setPage(page - 1)}>
        previous page
      </button>
      <button disabled={!data?.next} onClick={() => setPage(page + 1)}>
        next page
      </button>
    </>
  );
}

export default PlanetList;
