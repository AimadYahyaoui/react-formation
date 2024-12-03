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

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

function App() {
  const [planets, setPlanets] = useState<PlanetResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  useEffect(() => {
    getData("https://swapi.dev/api/planets");
  }, []);

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setPlanets(data);
  };

  return (
    <div>
      <p>bienvenue</p>
      {planets.results.map((planet) => {
        return (
          <div key={planet.url}>
            <p>name : {planet.name}</p>
          </div>
        );
      })}
      <button
        disabled={!planets.previous}
        onClick={() => getData(planets.previous!)}
      >
        previous
      </button>
      <button disabled={!planets.next} onClick={() => getData(planets.next!)}>
        next
      </button>
    </div>
  );
}

export default App;
