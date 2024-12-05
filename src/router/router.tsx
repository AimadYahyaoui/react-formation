import { createBrowserRouter, redirect } from "react-router";
import HomePage from "../pages/HomePage";
import PlanetList from "../pages/PlanetListClassico";
import PlanetListQuery from "../pages/PlanetList";
import CreateBeer from "../pages/CreateBeer";
import BeersList from "../pages/BeersList";
import Demo from "../pages/Demo";
import { getBeer } from "../services/beers.service";

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
        loader: async ({ params: { id } }) => {
          if (id) {
            try {
              const data = await getBeer(id);
              console.log(data);
              return { beer: data.data };
            } catch (error) {
              redirect("/beers");
            }
          }
          return {};
        },
        path: "update/:id?",
        element: <Demo></Demo>,
      },
    ],
  },
]);

export default router;
