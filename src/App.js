import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowBuckets from "./components/ShowBuckets";
import Header from "./components/Header";
import CreateCard from "./components/CreateCard";
import ShowCards from "./components/ShowCards";
import EditCard from "./components/EditCard";
import AllCards from "./components/AllCards";
import EditBucket from "./components/EditBucket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ShowBuckets />} />
          <Route path="/showCards" element={<ShowCards />} />
          <Route path="/createCard" element={<CreateCard />} />
          <Route path="/allCards/:id" element={<AllCards />} />
          <Route path="/editCard/:id" element={<EditCard />} />
          <Route path="/editBucket/:id" element={<EditBucket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
