import { DisplayOptionItem, Image } from "./DisplayOptionThumb.styles";
import { Link } from "react-router-dom";

const DisplayOption = ({ subcategory, optionName, displayOption }) => {
  return (
    <DisplayOptionItem>
      <Link
        to={`/Categories/${subcategory}/${optionName}/${displayOption.Subcategory2.replace(
          " ",
          "_"
        )}`}
      >
        <Image
          src={displayOption.ImagePublicUrl}
          alt={displayOption.Subcategory2}
        />
        <h3>{displayOption.Subcategory2}</h3>
      </Link>
    </DisplayOptionItem>
  );
};

export default DisplayOption;
