import { useContext } from "react";
import { Link } from "react-router";
import { BeerContext } from "../contexts/BeerContextProvider";

const BeersList = () => {
  const { beers, refetch, deleteBeerById } = useContext(BeerContext);

  return (
    <div>
      <button onClick={refetch}>refresh</button>
      <Link to="/beers/create">Create Beer</Link>
      <h1>Beers List</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <h2>{beer.name}</h2>
          <p>{beer.producer}</p>
          <p>{beer.degree}</p>
          <p>{beer.description}</p>
          <p>{beer.country}</p>
          <button onClick={() => deleteBeerById(beer._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BeersList;
