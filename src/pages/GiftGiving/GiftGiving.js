import GiftGivingData from "../../WebsiteJSON/Gift_GivingImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { GiftGivingPage } from "./GiftGiving.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import React, { useState } from "react";

const GiftGiving = () => {
  const subcategory2Mapper = (GiftGivingData) => {
    const allDisplayPicsUrlsForSubcategory2 = GiftGivingData.map(
      (photo) => photo.ImagePublicUrl
    );
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
        // description='Gift Giving'
        optionImageUrl={pictureUrl}
        subcategory='Gift Giving'
        dontLink={true}
      />
    ));
  };

  return (
    <GiftGivingPage>
      <Sidebar />
      <div className='contentSide'>{subcategory2Mapper(GiftGivingData)}</div>
    </GiftGivingPage>
  );
};

export default GiftGiving;
