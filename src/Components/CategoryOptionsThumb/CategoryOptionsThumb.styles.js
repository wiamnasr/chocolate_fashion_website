import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  background: #c8ab64;
  border-radius: 20px;
  // width: 200px;
  // height: 200px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding: 5px;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  width: 300px;
  height: 300px;

  .subcategoryLink {
    text-decoration: none;
  }

  h3 {
    color: #c8ab64;
  }

  p {
    list-style: none;
  }

  @media (min-width: 500px) {
  }

  @media (min-width: 870px) {
    width: 400px;
    height: 400px;

    h3 {
      margin: 10px 0 0 0;
    }

    p {
      margin: 5px 0;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  // width: 200px;
  width: 290px;

  @media (min-width: 500px) {
  }

  @media (min-width: 870px) {
    width: 390px;
  }
`;
