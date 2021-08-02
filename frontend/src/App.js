import './App.css';
import { Button } from "baseui/button";

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("click")}>Hello</Button>
    </div>
  );
}

export default App;
