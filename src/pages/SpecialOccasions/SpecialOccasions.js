// SpecialOccasionsPage

// import BaptismData from "../../WebsiteJSON/SpecialOccasions/BaptismImagesData.json";
// import CommunionData from "../../WebsiteJSON/SpecialOccasions/CommunionImagesData.json";
// import NewBornData from "../../WebsiteJSON/SpecialOccasions/NewBornImagesData.json";
// import WeddingsData from "../../WebsiteJSON/SpecialOccasions/WeddingsImagesData.json";

import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { SpecialOccasionsPage } from "./SpecialOccasions.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const SpecialOccasionsCategoryImages = [
  { name: "Baptism", url: "" },
  { name: "Communion", url: "" },
  { name: "New Born", url: "" },
  { name: "Weddings", url: "" },
  { name: "Engagements", url: "" },
];

const SpecialOccasions = ({ windowDimension }) => {
  const [specialOccasionsCategory, setSpecialOccasionsCategory] = useState("");

  return (
    <SpecialOccasionsPage>
      <Sidebar windowDimension={windowDimension} />
      <div className='contentSide'>
        {SpecialOccasionsCategoryImages.map((category, index) => (
          <div
            onClick={() =>
              setSpecialOccasionsCategory(
                SpecialOccasionsCategoryImages[index].name
              )
            }
          >
            <CategoryOptionsThumb
              description={category.name}
              optionImageUrl={category.url}
              subcategory='Special_Occasions'
              optionName={category.name.replace(" ", "_")}
            />
          </div>
        ))}
      </div>

      {/* {!!specialOccasionsCategory && subcategory2Mapper(engagementDisplay)} */}
    </SpecialOccasionsPage>
  );
};

export default SpecialOccasions;
