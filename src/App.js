import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home windowDimension={windowDimension} />} />
        <Route
          path='/categories'
          element={
            <Categories
              setSelectedCategory={setSelectedCategory}
              windowDimension={windowDimension}
            />
          }
        />
        <Route
          path='/Categories/Special_Occasions/Engagements'
          element={<Engagements windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Special_Occasions/Weddings'
          element={<Weddings windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Special_Occasions/Baptism'
          element={<Baptism windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Special_Occasions/Communion'
          element={<Communion windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Special_Occasions/New_Born'
          element={<NewBorn windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Gift_Giving'
          element={<GiftGiving windowDimension={windowDimension} />}
        />
        <Route
          path='/Categories/Special_Occasions'
          element={<SpecialOccasions windowDimension={windowDimension} />}
        />
        <Route path='/*' element={<Home windowDimension={windowDimension} />} />
      </Routes>
    </Router>
  );
}

export default App;
