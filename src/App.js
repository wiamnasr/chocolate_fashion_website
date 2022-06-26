import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Engagements from "./pages/Engagements/Engagements";
import GiftGiving from "./pages/GiftGiving/GiftGiving";
import SpecialOccasions from "./pages/SpecialOccasions/SpecialOccasions";
import Baptism from "./pages/Baptism/Baptism";
import Communion from "./pages/Communion/Communion";
import NewBorn from "./pages/NewBorn/NewBorn";
import Weddings from "./pages/Weddings/Weddings";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log("App level - selected category: ");
  console.log(selectedCategory);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/categories'
          element={<Categories setSelectedCategory={setSelectedCategory} />}
        />
        <Route
          path='/Categories/Special_Occasions/Engagements'
          element={<Engagements />}
        />
        <Route
          path='/Categories/Special_Occasions/Weddings'
          element={<Weddings />}
        />
        <Route
          path='/Categories/Special_Occasions/Baptism'
          element={<Baptism />}
        />
        <Route
          path='/Categories/Special_Occasions/Communion'
          element={<Communion />}
        />
        <Route
          path='/Categories/Special_Occasions/New_Born'
          element={<NewBorn />}
        />
        <Route path='/Categories/Gift_Giving' element={<GiftGiving />} />
        <Route
          path='/Categories/Special_Occasions'
          element={<SpecialOccasions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
