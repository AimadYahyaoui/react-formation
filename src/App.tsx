import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import ModalContextProvider from "./contexts/ModalContextProvider";

function App() {
  return (
    <div>
      <ModalContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
