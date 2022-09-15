import React from "react";
import Home from "./Pages/Home";
import Friends from "./Pages/Friends";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
