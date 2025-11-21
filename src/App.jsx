import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
    <div>
      <h1>This is my App component</h1>
      <p>Inside app component we have :</p>

      <Title />
      <Title />
      <Description />
      <ProductTab />
    </div>
  );
}

export default App;
