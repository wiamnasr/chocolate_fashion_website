import { DisplayThemeSection, Image } from "./DisplayThemeThumb.styles";
import { Link } from "react-router-dom";

const DisplayThemeThumb = ({
  selectedCategory,
  selectedCategoryOption,
  display,
}) => {
  return (
    <DisplayThemeSection>
      <Link
        to={`/Categories/${selectedCategory}/${selectedCategoryOption}/${display.displayName}`}
      >
        <Image src={display.displayCoverUrl} alt={display.displayName} />
        <h3>{display.displayName}</h3>
      </Link>
    </DisplayThemeSection>
  );
};

export default DisplayThemeThumb;
