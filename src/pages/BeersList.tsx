import { useEffect } from "react";
import { Link } from "react-router";
import useBeersStore from "../store/useBeersStore";
import { getBeers } from "../services/beers.service";

const BeersList = () => {
  const { beers, setBeers, deleteBeer } = useBeersStore();

  useEffect(() => {
    if (beers.length) return;
    /*  getBeers().then((response) => {
      setBeers(response);
    });*/
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
          <button onClick={() => deleteBeer(beer._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BeersList;
