// SpecialOccasionsPage

import BaptismData from "../../WebsiteJSON/SpecialOccasions/BaptismImagesData.json";
import CommunionData from "../../WebsiteJSON/SpecialOccasions/CommunionImagesData.json";
import NewBornData from "../../WebsiteJSON/SpecialOccasions/NewBornImagesData.json";
import WeddingsData from "../../WebsiteJSON/SpecialOccasions/WeddingsImagesData.json";

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

const SpecialOccasions = () => {
  const [specialOccasionsCategory, setSpecialOccasionsCategory] = useState("");
  //   const [selectedEngagementPictures, setSelectedEngagementPictures] =
  //     useState("");

  //   const CategoryMapper = () => {
  //     return ;
  //   };

  //   const subcategory2Mapper = (engagementDisplay) => {
  //     const allDisplayPicsUrlsForSubcategory2 = EngagementsData.filter(
  //       (imageItem) => imageItem.Subcategory2 === engagementDisplay
  //     ).map((photo) => photo.ImagePublicUrl);
  //     console.log(allDisplayPicsUrlsForSubcategory2);
  //     const displayPicsUrlsForSubcategory2 = new Set(
  //       allDisplayPicsUrlsForSubcategory2
  //     );
  //     console.log(displayPicsUrlsForSubcategory2);
  //     const displaPicsUrlsForSubcategory2Array = Array.from(
  //       displayPicsUrlsForSubcategory2
  //     );
  //     console.log(displaPicsUrlsForSubcategory2Array);

  //     return displaPicsUrlsForSubcategory2Array.map((pictureUrl) => (
  //       <CategoryOptionsThumb
  //         description={engagementDisplay}
  //         optionImageUrl={pictureUrl}
  //         subcategory={engagementDisplay}
  //       />
  //     ));
  //   };

  return (
    <SpecialOccasionsPage>
      <Sidebar />
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
