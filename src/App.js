import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SingleMovie from "./components/singleMovie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
