import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
