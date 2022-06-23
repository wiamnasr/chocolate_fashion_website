import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

import ContactUsButton from "../ContactUsButton/ContactUsButton";

const Sidebar = ({ setContactUsShowModal, contactUsShowModal }) => {
  const [activeClassNameClicked, setActiveClassNameClicked] = useState(true);
  console.log(activeClassNameClicked);

  const sidebarClickHandler = () =>
    setActiveClassNameClicked(!activeClassNameClicked);

  const contactUsClickHandler = (e) => {
    e.preventDefault();
    setContactUsShowModal(!contactUsShowModal);
  };

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
    <div className='sidebar'>
      <CDBSidebar
        toggled={windowDimension.winWidth < 500 ? true : false}
        textColor='#fff'
        backgroundColor='#c8ab64'
        breakpoint={800}
        minWidth={
          windowDimension.winWidth < 500
            ? "50px"
            : windowDimension.winWidth < 700
            ? "70px"
            : "80px"
        }
        maxWidth={
          windowDimension.winWidth < 500
            ? "100vw"
            : windowDimension.winWidth < 750
            ? "50vw"
            : windowDimension.winWidth < 1050
            ? "30vw"
            : "20vw"
        }
        className='cdbSidebar'
      >
        <CDBSidebarHeader
          prefix={<i className='fa fa-bars fa-large'></i>}
          onClick={sidebarClickHandler}
        >
          <div
            className='container'
            style={{ display: "flex", alignItems: "center" }}
          ></div>
          <ContactUsButton contactUsClickHandler={contactUsClickHandler} />
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/'>
              <CDBSidebarMenuItem className='activeClicked'>
                Home
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/Categories'>
              <CDBSidebarMenuItem className='activeClicked'>
                Categories
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className='sidebar-btn-wrapper'
            style={{
              padding: "20px 5px",
            }}
          >
            <img
              src={CFS_LOGO_TRANSPARENT}
              alt='Chocolate Fashion Logo, Transparent'
              className={
                activeClassNameClicked
                  ? "CFS_LOGO_NAVBAR_FOOTER"
                  : "CFS_LOGO_NAVBAR_FOOTER_Minimized"
              }
            ></img>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
