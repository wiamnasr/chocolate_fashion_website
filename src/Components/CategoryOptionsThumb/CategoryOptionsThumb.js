import { Wrapper, Image } from "./CategoryOptionsThumb.styles";
import { Link } from "react-router-dom";

const CategoryOptionsThumb = ({
  selectedCategory,
  categoryOptionKey,
  description,
  optionImageUrl,
}) => (
  <Wrapper>
    <Link to={`/Categories/${selectedCategory}/${categoryOptionKey}`}>
      <Image src={optionImageUrl} alt={description} />
      <h3>{description}</h3>
    </Link>
  </Wrapper>
);

export default CategoryOptionsThumb;
