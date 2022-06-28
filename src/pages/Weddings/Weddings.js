import WeddingsData from "../../WebsiteJSON/SpecialOccasions/WeddingsImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { WeddingsPage } from "./Weddings.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const WeddingsSubcategoryImages = [
  { name: "Butterfly", url: "" },
  { name: "Classic Bar set-up Wedding", url: "" },
  { name: "Elegent Wedding Gharib", url: "" },
  { name: "Johnny Walker Prime Elio", url: "" },
  { name: "Marry Rose", url: "" },
  { name: "VIP Mendelek WeddingKeep Walking Charbel", url: "" },
  { name: "Keep Walking Charbel", url: "" },
  { name: "Wedding Dress Nathalie", url: "" },
  { name: "White & classy", url: "" },
  { name: "classy vintage", url: "" },
  { name: "with love", url: "" },
];

const Weddings = ({ windowDimension }) => {
  const [weddingDisplay, setWeddingDisplay] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory2 = WeddingsData.map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);

    return subcategory2Array.map((subcategory2, index) => (
      <div
        onClick={() => setWeddingDisplay(WeddingsSubcategoryImages[index].name)}
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl={WeddingsSubcategoryImages[index].url}
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2Mapper = (weddingDisplay) => {
    const allDisplayPicsUrlsForSubcategory2 = WeddingsData.filter(
      (imageItem) => imageItem.Subcategory2 === weddingDisplay
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
        subcategory={weddingDisplay}
        dontLink={true}
      />
    ));
  };

  return (
    <WeddingsPage>
      <Sidebar
        back={!!weddingDisplay && setWeddingDisplay}
        windowDimension={windowDimension}
      />
      <div className='contentSide'>
        {!weddingDisplay && subcategoryMapper()}

        {!!weddingDisplay && subcategory2Mapper(weddingDisplay)}
      </div>
    </WeddingsPage>
  );
};

export default Weddings;
