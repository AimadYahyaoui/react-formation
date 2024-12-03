import { useEffect } from "react";
import { Link, useNavigate, useNavigation } from "react-router";

const HomePage = () => {
  const navigation = useNavigate();

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
      <h1>Home Page</h1>
      <a href="/planets">planets</a>
      <Link to="/planets">planets</Link>

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
