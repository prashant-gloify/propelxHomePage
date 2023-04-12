import "./App.css";
import Banner from "./Components/Bannner/Banner";
import Header from "./Components/Header/Header";
import InTheNews from "./Components/InTheNews/InTheNews";
import Movement from "./Components/Movement/Movement";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <InTheNews />
      <Movement />
      <Portfolio />
    </div>
  );
}

export default App;
