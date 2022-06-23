import styled from "styled-components";

export const CategoriesSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;

  .categoryOptionLink {
    text-decoration: none;
    color: #c8ab64;
  }

  .categoryHeader {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  width: 550px;
  transition: all 0, 3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
