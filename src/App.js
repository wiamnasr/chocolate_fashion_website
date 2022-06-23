import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// import HomePageSlideShow from "./Components/HomePageSlideShow/HomePageSlideShow";

import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Categories from "./pages/Categories/Categories";
import CategoryOptions from "./pages/CategoryOptions/CategoryOptions";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("");

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/Categories'
          element={<Categories setSelectedCategory={setSelectedCategory} />}
        />
        <Route
          path='/Categories/:categoryOption'
          element={
            <CategoryOptions
              selectedCategory={selectedCategory}
              setSelectedCategoryOption={setSelectedCategoryOption}
            />
          }
        />
        {/* <Route
          path='/categories/:categoryOption/:categoryOptionDisplays'
          element={
            <CategoryOptionDisplays
              selectedCategory={selectedCategory}
              selectedCategoryOption={selectedCategoryOption}
            />
          }
        /> */}
        {/* Showing the NotFound component on any other route that doesn't exist */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
      {/* <GlobalStyle /> */}
    </Router>
  );
}

export default App;
