import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContactUsModal from "./Components/ContactUsModal/ContactUsModal";
import { BrowserRouter as Router } from "react-router-dom";

import HomePageSlideShow from "./Components/HomePageSlideShow/HomePageSlideShow";

import CFS_LOGO_TRANSPARENT from "./Resources/svg/CFS_LOGO_TRANSPARENT.svg";

function App() {
  const [contactUsShowModal, setContactUsShowModal] = useState(false);
  return (
    <Router>
      <div className='App'>
        <div className='homePageSidebarSection'>
          <Sidebar
            setContactUsShowModal={setContactUsShowModal}
            contactUsShowModal={contactUsShowModal}
          />
        </div>

        <div className='homePageNavigationSection'>
          <a
            className='mainAnchor'
            href='https://www.facebook.com/chocolatefashionsignature'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={CFS_LOGO_TRANSPARENT}
              alt='Chocolate Fashion Logo, Transparent'
              className='CFS_LOGO'
            ></img>

            <h2 className='comingSoon'>Coming Soon...</h2>
          </a>

          <div className='HomePageSlideShow'>
            <HomePageSlideShow />
          </div>
        </div>
      </div>
      {contactUsShowModal ? (
        <ContactUsModal setContactUsShowModal={setContactUsShowModal} />
      ) : null}
    </Router>
  );
}

export default App;
