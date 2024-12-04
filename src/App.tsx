import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import BeerContextProvider from "./contexts/BeerContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider";

function App() {
  return (
    <div>
      <ModalContextProvider>
        <BeerContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </BeerContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
