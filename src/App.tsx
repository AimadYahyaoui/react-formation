import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import BeerContextProvider from "./contexts/BeerContextProvider";
import ModalComponent from "./components/ModalComponent";

function App() {
  return (
    <div>
      <BeerContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </BeerContextProvider>
      <ModalComponent
        title="Hello World"
        content="This is a modal"
        isOpen={true}
        onClose={() => {
          console.log("close");
        }}
      ></ModalComponent>
    </div>
  );
}

export default App;
