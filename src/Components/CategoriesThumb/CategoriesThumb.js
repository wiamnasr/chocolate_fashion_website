import React from "react";

import { Link } from "react-router-dom";

// Styles
import { CategoriesSection, Image } from "./CategoriesThumb.styles";

const CategoriesThumb = ({ categoryOptionImageUrl, categoryOption }) => (
  <CategoriesSection>
    <Link
      to={`/categories/${categoryOption.replace(" ", "_")}`}
      className='categoryOptionLink'
    >
      <Image src={categoryOptionImageUrl} alt={`${categoryOption}`} />
      <h2 className='categoryHeader'>{categoryOption}</h2>
    </Link>
  </CategoriesSection>
);

export default CategoriesThumb;
