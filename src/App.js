import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
