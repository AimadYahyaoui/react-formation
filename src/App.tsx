import "./App.css";
import useFetch from "./hooks/useFetch";

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

function App() {
  const { loading, error, data } = useFetch<PlanetResponse>(
    "https://swapi.dev/api/planets"
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
      <p>bienvenue</p>
      {data?.results.map((planet) => {
        return (
          <div key={planet.url}>
            <p>name : {planet.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
