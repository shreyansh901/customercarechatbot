import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ChatBox />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
