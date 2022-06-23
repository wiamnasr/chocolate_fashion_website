import styled from "styled-components";

export const CategoriesPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CategoriesList = styled.ul`
  width: 90%;
  height: 90vh;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .categoryListItem {
    margin: 1rem;
  }
`;


