import BaptismData from "../../WebsiteJSON/SpecialOccasions/BaptismImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { BaptismPage } from "./Baptism.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const BaptismSubcategoryImages = [
  { name: "Charbel", url: "" },
  { name: "I am a child of GOD jesus de prague", url: "" },
  { name: "John gold", url: "" },
  { name: "Selena", url: "" },
];

const Baptism = ({ windowDimension }) => {
  const [baptismDisplay, setBaptismDisplay] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory2 = BaptismData.map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);

    return subcategory2Array.map((subcategory2, index) => (
      <div
        onClick={() => setBaptismDisplay(BaptismSubcategoryImages[index].name)}
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl={BaptismSubcategoryImages[index].url}
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2Mapper = (engagementDisplay) => {
    const allDisplayPicsUrlsForSubcategory2 = BaptismData.filter(
      (imageItem) => imageItem.Subcategory2 === engagementDisplay
    ).map((photo) => photo.ImagePublicUrl);
    const displayPicsUrlsForSubcategory2 = new Set(
      allDisplayPicsUrlsForSubcategory2
    );
    const displaPicsUrlsForSubcategory2Array = Array.from(
      displayPicsUrlsForSubcategory2
    );

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
    <BaptismPage>
      <Sidebar
        back={!!baptismDisplay && setBaptismDisplay}
        windowDimension={windowDimension}
      />

      <div className='contentSide'>
        {!baptismDisplay && subcategoryMapper()}

        {!!baptismDisplay && subcategory2Mapper(baptismDisplay)}
      </div>
    </BaptismPage>
  );
};

export default Baptism;
