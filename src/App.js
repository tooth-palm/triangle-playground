import Canvas from "./Components/Canvas";
import sketch from "./Components/sketch";

function App() {
  return (
    <div className="App">
      <Canvas sketch={sketch} />
    </div>
  );
}

export default App;
