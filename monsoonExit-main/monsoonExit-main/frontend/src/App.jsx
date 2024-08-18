import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import UpdatePost from "./components/UpdatePost"; // Import the UpdatePost component
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<UpdatePost />} /> {/* Add route for UpdatePost */}
      </Routes>
    </>
  );
}

export default App;
