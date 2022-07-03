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
    height: 100%;
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
    margin: 2rem 10vw 0 0;
    padding-top: 5%;
    font-size: 1.3rem;
  }

  .introLogoImage {
    width: 7rem;
    height: 7rem;
  }

  @media screen and (min-width: 570px) {
    .aboutUsTextContent {
      width: 70vw;
      height: auto;
      background: rgba(255, 255, 255, 0.616);
      color: #c8ab64;
      word-spacing: 0.5rem;
      margin: 5rem 10vw 0 0;
      padding-top: 5%;
      font-size: 1.5rem;
    }

    .introLogoImage {
      width: 7rem;
      height: 7rem;
    }
  }

  @media screen and (min-width: 875px) {
    .aboutUsTextContent {
      height: auto;
      background: rgba(255, 255, 255, 0.616);
      color: #c8ab64;
      word-spacing: 0.5rem;
      margin: 4rem 10vw 0 0;
      padding-top: 5%;
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1300px) {
    .aboutUsTextContent {
      width: 70vw;
      height: auto;
      background: rgba(255, 255, 255, 0.616);
      color: #c8ab64;
      word-spacing: 0.5rem;
      margin: 5rem 10vw 0 0;
      padding-top: 5%;
    }
  }
`;
