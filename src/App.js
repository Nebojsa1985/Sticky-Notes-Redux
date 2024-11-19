import "./App.css";

import Menu from "./components/menu";
import Heading from "./components/heading";
import Notes from "./components/notes";

function App() {
  return (
    <div className="App">
      <Heading />
      <Menu />
      <Notes />
    </div>
  );
}

export default App;
