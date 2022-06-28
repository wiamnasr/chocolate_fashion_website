import CommunionData from "../../WebsiteJSON/SpecialOccasions/CommunionImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { CommunionPage } from "./Communion.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const CommunionSubcategoryImages = [
  {
    name: "2 Angels",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2F2%20Angels%2F20140510_195034.jpg",
  },
  {
    name: "Calice",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2FCalice%2FDSC_0163.JPG",
  },
  {
    name: "Crystal Cross",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2FCrystal%20Cross%2FIMG-20160507-WA0021.jpg",
  },
  {
    name: "Lynn",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2FLynn%2FIMG_3303.JPG",
  },
  {
    name: "Rhea",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Communion%2F1stCommunion%2FRhea%2FIMG_3202.JPG",
  },
];

const Communion = ({ windowDimension }) => {
  const [communionDisplay, setCommunionDisplay] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory2 = CommunionData.map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);

    return subcategory2Array.map((subcategory2, index) => (
      <div
        onClick={() =>
          setCommunionDisplay(CommunionSubcategoryImages[index].name)
        }
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl={CommunionSubcategoryImages[index].url}
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2Mapper = (engagementDisplay) => {
    const allDisplayPicsUrlsForSubcategory2 = CommunionData.filter(
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
    <CommunionPage>
      <Sidebar
        back={!!communionDisplay && setCommunionDisplay}
        windowDimension={windowDimension}
      />
      <div className='contentSide'>
        {!communionDisplay && subcategoryMapper()}

        {!!communionDisplay && subcategory2Mapper(communionDisplay)}
      </div>
    </CommunionPage>
  );
};

export default Communion;
