import styled from "styled-components";


export const AboutUsScroller = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100vw;
  height: 100%;
  margin-top: 0;

  .CFS_LOGO_BACKGROUND_MOBILE {
    display: block;
    width: 100%;
    height: 100vh;
  }

  .CFS_LOGO_BACKGROUND {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin-top: 0;
  }

  .CFS_LOGO_MOBILE {
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100vw;
    height: 100%;
    background: #f8f7f565;
  }

  .CFS_LOGO {
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100vw;
    height: 100%;
  }

  .aboutUsTextSection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .aboutUsTextContent {
    width: 50%;
    background: #c8ab64;
    color: white;
    word-spacing: .5rem;
    margin: 5px;
  }
`;