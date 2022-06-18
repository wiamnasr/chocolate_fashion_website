import React, { useState } from "react";
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

const Sidebar = ({ setContactUsShowModal, contactUsShowModal }) => {
  const [activeClassNameClicked, setActiveClassNameClicked] = useState(true);
  console.log(activeClassNameClicked);

  const sidebarClickHandler = () =>
    setActiveClassNameClicked(!activeClassNameClicked);

  const contactUsClickHandler = (e) => {
    e.preventDefault();
    setContactUsShowModal(!contactUsShowModal);
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor='#fff' backgroundColor='#c8ab64'>
        <CDBSidebarHeader
          prefix={<i className='fa fa-bars fa-large'></i>}
          onClick={sidebarClickHandler}
        >
          <button
            className='contactUs'
            style={{ color: "inherit" }}
            onClick={contactUsClickHandler}
          >
            Contact Us
          </button>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/'>
              <CDBSidebarMenuItem className='activeClicked'>
                Home
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/About'>
              <CDBSidebarMenuItem className='activeClicked'>
                About CF Signature
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
