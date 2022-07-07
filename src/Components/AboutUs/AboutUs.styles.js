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

  .founderMessage {
    width: 80vw;
    height: auto;
    background: rgba(255, 255, 255, 0.705);
    color: #c8ab64;
    word-spacing: 0.6rem;
    margin: 0.5rem 1vw 0 0;
    padding: 2rem 0.5rem 0.5rem 0.5rem;
    font-size: 1.4rem;
    font-weight: bolder;
    letter-spacing: 0.3rem;
    line-height: 1.6rem;
  }  

  .introLogoImage {
    width: 7rem;
    height: 7rem;
  }

  @media screen and (min-width: 570px) {
    .aboutUsTextContent {
      margin: 1rem 8vw 0 0;
      padding-top: 0.5rem;
    }

    .founderMessage {
      width: 70vw;
    }

    
  }



  @media screen and (min-width: 1000px) {
    .aboutUsSection {
      justify-content: center;
    }

    .founderMessage {
      width: 55vw;
    }


    
  }

  @media screen and (min-width: 1300px) {
    .founderMessage {
      font-size: 1.8rem;
      line-height: 2rem;

    }

  
    
  }
`;
