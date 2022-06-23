import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top:0;
  width: 100%;
  background: white;
  padding: 0 20px;
  height: 150px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

// export const TMDBLogoImg = styled.img`
//   width: 100px;

//   @media screen and (max-width: 500px) {
//     width: 80px;
//   }
// `;
