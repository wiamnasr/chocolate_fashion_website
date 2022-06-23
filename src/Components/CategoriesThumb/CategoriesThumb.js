import React from "react";

import { Link } from "react-router-dom";

// Styles
import { CategoriesSection, Image } from "./CategoriesThumb.styles";

const CategoriesThumb = ({ categoryOptionImageUrl, categoryOption }) => (
  <CategoriesSection>
    <Link to={`/Categories/${categoryOption}`} className="categoryOptionLink">
      <Image src={categoryOptionImageUrl} alt={`${categoryOption}`} />
      <h2 className="categoryHeader">{categoryOption}</h2>
    </Link>
  </CategoriesSection>
);

export default CategoriesThumb;
