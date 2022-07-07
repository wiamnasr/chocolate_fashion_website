import BaptismData from "../../WebsiteJSON/SpecialOccasions/BaptismImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { BaptismPage } from "./Baptism.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const BaptismSubcategoryImages = [
  {
    name: "Charbel",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Baptism%2FAll_Baptism%2FCharbel%2FIMG_4797.JPG",
  },
  {
    name: "I am a child of GOD jesus de prague",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Baptism%2FAll_Baptism%2FI%20am%20a%20child%20of%20GOD%20jesus%20de%20prague%2FIMG-20181102-WA0009.jpg",
  },
  {
    name: "John gold",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Baptism%2FAll_Baptism%2FJohn%20gold%2FIMG_4841.JPG",
  },
  {
    name: "Selena",
    url: "https://storage.googleapis.com/chocolatefashionsignature.com/Baptism%2FAll_Baptism%2FSelena%2FIMG_4721.JPG",
  },
];

const Baptism = ({ windowDimension }) => {
  const [baptismDisplay, setBaptismDisplay] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory2 = BaptismData.map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);
    subcategory2Array[2] = "3-Angelically White";
    console.log(subcategory2Array);

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
      (imageItem) =>
        imageItem.Subcategory2 === engagementDisplay &&
        imageItem.ImagePublicUrl.includes(".JPG")
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
