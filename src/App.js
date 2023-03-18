import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import FavList from "./components/FavList/FavList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favMovie" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
