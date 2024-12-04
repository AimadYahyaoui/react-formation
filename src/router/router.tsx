import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import PlanetList from "../pages/PlanetListClassico";
import CreateBeer from "../pages/CreateBeer";
import BeersList from "../pages/BeersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/planets",
    element: <PlanetList></PlanetList>,
  },
  {
    path: "/beers",
    children: [
      {
        path: "",
        element: <BeersList></BeersList>,
      },
      {
        path: "create",
        element: <CreateBeer></CreateBeer>,
      },
    ],
  },
]);

export default router;
