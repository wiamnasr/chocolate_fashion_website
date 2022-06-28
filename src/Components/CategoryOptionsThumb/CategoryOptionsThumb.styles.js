import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  background: #c8ab64;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  width: 400px;
  height: 400px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  h3 {
    margin: 10px 0 0 0;
    color: #c8ab64;
    text-decoration: none;
  }

  p {
    margin: 5px 0;
    list-style: none;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 390px;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
