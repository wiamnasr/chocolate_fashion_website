import EngagementsData from "../../WebsiteJSON/SpecialOccasions/EngagementsImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { EngagementPage } from "./Engagements.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const EngagementSubcategoryImages = [
  { name: "Engagement 3", url: "" },
  { name: "Engagement Bois-de-rose", url: "" },
  { name: "Engagement1", url: "" },
  { name: "Engagment2", url: "" },
  { name: "Ghina Bois-de-rose", url: "" },
];

const Engagements = () => {
  const [engagementDisplay, setEngagementDisplay] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory2 = EngagementsData.map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);

    return subcategory2Array.map((subcategory2, index) => (
      <div
        onClick={() =>
          setEngagementDisplay(EngagementSubcategoryImages[index].name)
        }
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl={EngagementSubcategoryImages[index].url}
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2Mapper = (engagementDisplay) => {
    const allDisplayPicsUrlsForSubcategory2 = EngagementsData.filter(
      (imageItem) => imageItem.Subcategory2 === engagementDisplay
    ).map((photo) => photo.ImagePublicUrl);
    console.log(allDisplayPicsUrlsForSubcategory2);
    const displayPicsUrlsForSubcategory2 = new Set(
      allDisplayPicsUrlsForSubcategory2
    );
    console.log(displayPicsUrlsForSubcategory2);
    const displaPicsUrlsForSubcategory2Array = Array.from(
      displayPicsUrlsForSubcategory2
    );
    console.log(displaPicsUrlsForSubcategory2Array);

    return displaPicsUrlsForSubcategory2Array.map((pictureUrl) => (
      <CategoryOptionsThumb
        // description={engagementDisplay}
        optionImageUrl={pictureUrl}
        subcategory={engagementDisplay}
        dontLink={true}
      />
    ));
  };

  return (
    <EngagementPage>
      <div className='contentSide'>
        <Sidebar back={!!engagementDisplay && setEngagementDisplay} />
        {!engagementDisplay && subcategoryMapper()}

        {!!engagementDisplay && subcategory2Mapper(engagementDisplay)}
      </div>
    </EngagementPage>
  );
};

export default Engagements;
