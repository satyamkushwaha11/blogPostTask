import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages";
// import PageNotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Index />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
