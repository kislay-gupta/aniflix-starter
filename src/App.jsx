import "./App.css";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Genre from "./page/Genre";
import AnimeDetails from "./page/AnimeDetails";
import Navbar from "./components/Navbar";
import SearchAnime from "./page/SearchAnime";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="mx-auto w-full max-w-5xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genre/:id" element={<Genre />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
            <Route path="/search" element={<SearchAnime />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
