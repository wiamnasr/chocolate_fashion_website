import { Wrapper, Image } from "./CategoryOptionsThumb.styles";
import { Link } from "react-router-dom";

const CategoryOptionsThumb = ({
  description,
  optionImageUrl,
  subcategory,
  optionName,
  dontLink,
  nameOfTheDisplay,
}) => (
  <Wrapper>
    {!dontLink && (
      <Link
        to={`/Categories/${subcategory}/${
          optionName ? optionName.replace(" ", "_") : ""
        }${nameOfTheDisplay ? "/" + nameOfTheDisplay : ""}`}
        className="subcategoryLink"
      >
        <Image src={optionImageUrl} alt={description} />
        <h3>{description}</h3>
      </Link>
    )}
    {dontLink && (
      <>
        <Image src={optionImageUrl} alt={description} />
        <h3>{description}</h3>
      </>
    )}
  </Wrapper>
);

export default CategoryOptionsThumb;
