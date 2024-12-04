import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ModalContext } from "../contexts/ModalContextProvider";

const HomePage = () => {
  const navigation = useNavigate();
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    const listener = (e: Event) => {
      console.log(e);
    };
    document.addEventListener("scroll", listener);
    return () => {
      console.log("cleanup");
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "200vh",
      }}
    >
      <button
        onClick={() => {
          openModal("super modal", "contenu");
        }}
      >
        display my super modal
      </button>
      <h1>Home Page</h1>
      <a href="/planets">planets</a>
      <Link to="/planets">planets</Link>
      <button>display modal</button>
      <button
        onClick={() => {
          navigation("/planets");
        }}
      >
        redirect to planets
      </button>
    </div>
  );
};

export default HomePage;
