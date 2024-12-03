import { useEffect, useState } from "react";
import "./App.css";

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
function App() {
  const [refresh, setRefresh] = useState(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets?page=" + page)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, [refresh, page]);

  return (
    <div>
      <p>bienvenue</p>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      {planets.map((planet) => {
        return (
          <div key={planet.url}>
            <p>name : {planet.name}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        previous
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
