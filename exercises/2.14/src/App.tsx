import { useState } from "react";
import RandomDog from "./RandomDog";
import CounterComponent from "./CounterComponent";

const App = () => {
  const [refresh] = useState(false);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog key={`${refresh}1`} />
        <RandomDog key={`${refresh}2`} />
        <RandomDog key={`${refresh}3`} />
      </div>

      <CounterComponent />
    </>
  );
};

export default App;