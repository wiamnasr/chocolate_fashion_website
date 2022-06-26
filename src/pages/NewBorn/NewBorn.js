import NewBornData from "../../WebsiteJSON/SpecialOccasions/NewBornImagesData.json";
import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import { NewBornPage } from "./NewBorn.styles";
import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";

const NewBornSubcategoryImages = [
  { name: "Baby Boy", url: "" },
  { name: "Baby Girl", url: "" },
];

const NewBorn = () => {
  const [newBornDisplay, setNewBornDisplay] = useState("");
  const [
    newBornSelectedDisplaySubcategory2,
    setNewBornSelectedDisplaySubcategory2,
  ] = useState("");

  const subcategoryMapper = () => {
    const allSubcategory = NewBornData.map((photo) => photo.Subcategory);
    const subcategory = new Set(allSubcategory);
    const subcategoryArray = Array.from(subcategory);
    console.log(subcategoryArray);

    return subcategoryArray.map((subcategory2, index) => (
      <div
        onClick={() =>
          setNewBornDisplay(NewBornSubcategoryImages[index].name) &&
          console.log(NewBornSubcategoryImages[index].name)
        }
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl={NewBornSubcategoryImages[index].url}
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2Mapper = (newBornDisplay) => {
    const allSubcategory2 = NewBornData.filter(
      (imageItem) =>
        imageItem.Subcategory.toLowerCase().trim().replace(" ", "_") ===
        newBornDisplay.toLowerCase().trim().replace(" ", "_")
    ).map((photo) => photo.Subcategory2);
    const subcategory2 = new Set(allSubcategory2);
    const subcategory2Array = Array.from(subcategory2);
    console.log(subcategory2Array);

    return subcategory2Array.map((subcategory2) => (
      <div
        key={subcategory2}
        onClick={() => setNewBornSelectedDisplaySubcategory2(subcategory2)}
      >
        <CategoryOptionsThumb
          description={subcategory2}
          optionImageUrl=''
          subcategory={subcategory2.replace(" ", "_")}
          dontLink={true}
        />
      </div>
    ));
  };

  const subcategory2ImagesMapper = (newBornSelectedDisplaySubcategory2) => {
    const allDisplayPicsUrlsForSubcategory2 = NewBornData.filter(
      (imageItem) =>
        imageItem.Subcategory2 === newBornSelectedDisplaySubcategory2
    ).map((photo) => photo.ImagePublicUrl);
    const displayPicsUrlsForSubcategory = new Set(
      allDisplayPicsUrlsForSubcategory2
    );
    const displaPicsUrlsForSubcategory2Array = Array.from(
      displayPicsUrlsForSubcategory
    );

    return displaPicsUrlsForSubcategory2Array.map((pictureUrl) => (
      <CategoryOptionsThumb
        // description={engagementDisplay}
        optionImageUrl={pictureUrl}
        subcategory={newBornDisplay}
        dontLink={true}
      />
    ));
  };

  return (
    <NewBornPage>
      <Sidebar back={!!newBornDisplay && setNewBornDisplay} />
      <div className='contentSide'>
        {!newBornDisplay &&
          !newBornSelectedDisplaySubcategory2 &&
          subcategoryMapper()}

        {!!newBornDisplay &&
          !newBornSelectedDisplaySubcategory2 &&
          subcategory2Mapper(newBornDisplay)}

        {!!newBornSelectedDisplaySubcategory2 &&
          !!newBornDisplay &&
          subcategory2ImagesMapper(newBornSelectedDisplaySubcategory2)}
      </div>
    </NewBornPage>
  );
};

export default NewBorn;
