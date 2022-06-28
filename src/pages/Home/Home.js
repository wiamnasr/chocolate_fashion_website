import "./Home.css";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContactUsModal from "../../Components/ContactUsModal/ContactUsModal";
import CFS_LOGO_BACKGROUND from "../../Resources/png/HomePageIcon.jpg";
import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";

const Home = ({ windowDimension }) => {
  const [contactUsShowModal, setContactUsShowModal] = useState(false);
  const [activeClassNameClicked, setActiveClassNameClicked] = useState(
    windowDimension.winWidth < 500 ? true : false
  );
  console.log(activeClassNameClicked);

  return (
    <div className='Home'>
      <div className={'homePageSidebarSection'}>
        <Sidebar
          setContactUsShowModal={setContactUsShowModal}
          contactUsShowModal={contactUsShowModal}
          setActiveClassNameClicked={setActiveClassNameClicked}
          activeClassNameClicked={activeClassNameClicked}
          windowDimension={windowDimension}
        />
      </div>

      <div className='homePageNavigationSection'>
        <img
          src={CFS_LOGO_BACKGROUND}
          alt='Chocolate Fashion Logo, Transparent'
          className='CFS_LOGO_BACKGROUND'
        ></img>
        <img
          src={CFS_LOGO_TRANSPARENT}
          alt='Chocolate Fashion Logo, Transparent'
          className={
            !activeClassNameClicked && windowDimension.winWidth < 500
              ? "CFS_LOGO_SENDBACK"
              : "CFS_LOGO"
          }
        ></img>

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
