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

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, [refresh]);

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
      <button>previous</button>
      <button>next</button>
    </div>
  );
}

export default App;
