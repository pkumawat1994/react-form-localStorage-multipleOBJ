import logo from "./logo.svg";
import "./App.css";
import RegLog from "./components/RegLog";
// import Showuser from "./components/Showuser";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import ShowTable from "./components/ShowTable";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RegLog />} />

        <Route path="/showuser" element={<ShowTable />} />
      </Routes>
    </>
  );
}

export default App;
