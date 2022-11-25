import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Options from "./Components/Option/Options";
import Picked from "./Components/Picked/Picked";

function App() {
  return (
    <div className="max-w-[1560px] mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <Options></Options>
      <Picked></Picked>
    </div>
  );
}

export default App;
