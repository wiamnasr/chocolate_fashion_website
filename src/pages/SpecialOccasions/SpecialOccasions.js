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
  {
    name: "Baptism",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Icons%2FSpecial_Occasions%2FBaptism.jpg",
  },
  {
    name: "Communion",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Icons%2FSpecial_Occasions%2Fcommunion.jpg",
  },
  {
    name: "New Born",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Icons%2FSpecial_Occasions%2FnewBorn.jpg",
  },
  {
    name: "Weddings",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Icons%2FSpecial_Occasions%2Fweddings.jpg",
  },
  {
    name: "Engagements",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Icons%2FSpecial_Occasions%2Fengagements.jpg",
  },
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
