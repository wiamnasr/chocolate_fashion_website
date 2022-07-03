import styled from "styled-components";

export const AboutUsScroller = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  background-image: url("https://storage.googleapis.com/chocolatefashionsignature.com/Icons/mobileBackground.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

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

  .aboutUsSection {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
  }

  .aboutUsTextContent {
    width: 70vw;
    height: auto;
    background: rgba(255, 255, 255, 0.616);
    color: #c8ab64;
    word-spacing: 0.5rem;
    margin: 1rem 10vw 0 0;
    padding-top: 5%;
    font-size: .8rem;
  }

  .homepageSlideShowDisplay {
    width: 90vw;
    height: 40vh;
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;

  }
  
  .introLogoImage {
    width: 3rem;
    height: 3rem;
  }

  @media screen and (min-width: 570px) {
    .aboutUsTextContent {
      margin: 1rem 8vw 0 0;
      padding-top: 0.5rem;
    }
  }

  @media screen and (min-width: 875px) {
    .aboutUsTextContent {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1300px) {
    .aboutUsTextContent {
      font-size: 1.6rem;
    }
  }
`;
