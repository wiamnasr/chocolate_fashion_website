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

// import ContactUsButton from "../ContactUsButton/ContactUsButton";

const Sidebar = ({
  setContactUsShowModal,
  contactUsShowModal,
  back,
  setActiveClassNameClicked,
  activeClassNameClicked,
  windowDimension,
}) => {
  const sidebarClickHandler = () =>
    setActiveClassNameClicked(!activeClassNameClicked);

  const isToggled = windowDimension.winWidth < 500 ? true : false;

  return (
    <div className='sidebar'>
      <CDBSidebar
        toggled={isToggled}
        textColor='rgb(200, 171, 100)'
        backgroundColor='transparent'
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
          style={{ backgroundColor: "rgba(255, 255, 255, 0.449)" }}
        >
          {/* <div
            className='container'
            style={{ display: "flex", alignItems: "center" }}
          ></div> */}
          {/* <ContactUsButton contactUsClickHandler={contactUsClickHandler} /> */}
          {!!back && (
            <h2
              onClick={() => back("")}
              style={{
                color: "rgb(200, 171, 100)",
                width: "60px",
                height: "60px",
                cursor: "pointer",
              }}
            >
              Back
            </h2>
          )}
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Home
              </CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to='/Categories'>
              <CDBSidebarMenuItem className='activeClicked'>
                Categories
              </CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to='/Categories/Special_Occasions'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Special Occasions
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/Categories/Special_Occasions/Engagements'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Engagements
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Categories/Special_Occasions/Weddings'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Weddings
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Categories/Special_Occasions/Baptism'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Baptism
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Categories/Special_Occasions/Communion'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Communion
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Categories/Special_Occasions/New_Born'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                New Born
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Categories/Gift_Giving'>
              <CDBSidebarMenuItem
                className={
                  windowDimension.winHeight < 500
                    ? "activeClicked-rotated"
                    : "activeClicked"
                }
              >
                Gift Giving
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
              id={windowDimension.winHeight < 500 && "cfs_logo_navbar_rotated"}
            ></img>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
