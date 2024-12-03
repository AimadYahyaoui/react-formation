import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import PlanetList from "../pages/PlanetListClassico";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/planets",
    element: <PlanetList></PlanetList>,
  },
]);

export default router;
