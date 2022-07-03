import "./Home.css";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContactUsModal from "../../Components/ContactUsModal/ContactUsModal";

import AboutUs from "../../Components/AboutUs/AboutUs";

const Home = ({ windowDimension }) => {
  const [contactUsShowModal, setContactUsShowModal] = useState(false);
  const [activeClassNameClicked, setActiveClassNameClicked] = useState(true);

  return (
    <div className='Home'>
      <div className={"homePageSidebarSection"}>
        <Sidebar
          setContactUsShowModal={setContactUsShowModal}
          contactUsShowModal={contactUsShowModal}
          setActiveClassNameClicked={setActiveClassNameClicked}
          activeClassNameClicked={activeClassNameClicked}
          windowDimension={windowDimension}
        />
      </div>

      <div className='homePageNavigationSection'>
        <AboutUs windowDimension={windowDimension} />

        {/* <div className='HomePageSlideShow'>
            <HomePageSlideShow />
          </div> */}
      </div>

      {contactUsShowModal ? (
        <ContactUsModal setContactUsShowModal={setContactUsShowModal} />
      ) : null}
    </div>
  );
};

export default Home;
