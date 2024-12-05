import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import PlanetList from "../pages/PlanetListClassico";
import PlanetListQuery from "../pages/PlanetList";
import CreateBeer from "../pages/CreateBeer";
import BeersList from "../pages/BeersList";
import Demo from "../pages/Demo";

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
    path: "/planets-query",
    element: <PlanetListQuery></PlanetListQuery>,
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
      {
        path: "update/:id",
        element: <Demo></Demo>,
      },
    ],
  },
]);

export default router;
