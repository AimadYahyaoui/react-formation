import "./App.css";
import Card, { url } from "./components/CardComponent";

function App() {
  console.log(url);
  return (
    <div>
      <p>bienvenue</p>
      <Card title="title" content="content"></Card>
    </div>
  );
}

export default App;
