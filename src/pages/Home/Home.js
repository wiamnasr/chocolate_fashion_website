import "./Home.css";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContactUsModal from "../../Components/ContactUsModal/ContactUsModal";

import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";

const Home = () => {
  const [contactUsShowModal, setContactUsShowModal] = useState(false);
  return (
    <div className='Home'>
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
        </a>

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
