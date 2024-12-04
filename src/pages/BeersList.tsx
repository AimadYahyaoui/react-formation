import { useEffect, useState } from "react";
import { getBeers } from "../services/beers.service";
import { Link } from "react-router";
import { Beer } from "../schemas/beer.schema";

const BeersList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    getBeers().then((response) => {
      console.log(response);
      setBeers(response);
    });
  }, []);

  return (
    <div>
      <Link to="/beers/create">Create Beer</Link>
      <h1>Beers List</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <h2>{beer.name}</h2>
          <p>{beer.producer}</p>
          <p>{beer.degree}</p>
          <p>{beer.description}</p>
          <p>{beer.country}</p>
        </div>
      ))}
    </div>
  );
};

export default BeersList;
