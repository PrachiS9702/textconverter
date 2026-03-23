import { Routes, Route } from "react-router-dom";
import React from "react";
import About from "../components/About";
import TextForm from "../components/textform";


function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <TextForm title="Text Converter" togglemode={props.togglemode} showAlert={props.showAlert} />
        </div>
      } />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;