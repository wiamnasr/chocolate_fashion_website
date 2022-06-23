import React from "react";
import { Link } from "react-router-dom";

import CFS_LOGO_TRANSPARENT from "../../Resources/svg/CFS_LOGO_TRANSPARENT.svg";

import { Wrapper, Content, LogoImg } from "./Header.styles";
// , TMDBLogoImg ^

const Header = () => (
  <Wrapper>
    <Content>
      {/* Leeds to home page */}
      <Link to='/'>
        <LogoImg src={CFS_LOGO_TRANSPARENT} alt='Chocolate Fashion Logo' />
      </Link>

      {/* <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' /> */}
    </Content>
  </Wrapper>
);

export default Header;
