import { DisplaysInCategoryOptionPage } from "./DisplaysInCategoryOption.styles";
import { useParams } from "react-router-dom";
import DisplayOptionThumb from "../../Components/DisplayOptionThumb/DisplayOptionThumb";


const sourceUrl = "../../WebsiteJSON";
const displaySources = {
  Special_Occasions: [
    "Baptism",
    "Communion",
    "New_Born",
    "Weddings",
    "Engagements",
  ],
  Engagements: "Engagements",
  Events: "Events",
  Gift_Giving: "Gift_Giving",
  Window_Displays: "Window_Displays",
};

const SETjsonIMPORT = (subcategory, optionName) => {
  var jsonFileToImport = "starting";
  // console.log(jsonFileToImport);
  // console.log(typeof displaySources[subcategory]);
  if (typeof displaySources[subcategory] !== String) {
    jsonFileToImport = `${sourceUrl}/SpecialOccasions/${displaySources[
      "Special_Occasions"
    ]
      .filter((occasion) => occasion === optionName)[0]
      .replace("_", "")}ImagesData.json`;
    // console.log(jsonFileToImport);
    return jsonFileToImport;
  } else {
    console.log(displaySources[subcategory]);
    jsonFileToImport = `${sourceUrl}/${displaySources[subcategory].replace(
      "_",
      ""
    )}ImagesData.json`;
    // console.log(jsonFileToImport);
    return jsonFileToImport;
  }
};

const DisplaysInCategoryOption = ({ setSelectedSubcategory2 }) => {
  const { subcategory, optionName } = useParams();
  // console.log(subcategory);

  const jsonImportUrl = SETjsonIMPORT(subcategory, optionName);
  console.log(jsonImportUrl);
  const jsonData = require(`${jsonImportUrl}`);
  const parsedJsonData = JSON.parse(jsonData);
  console.log(parsedJsonData[0].Category);
  return (
    <DisplaysInCategoryOptionPage>
      {parsedJsonData[0].Subcategory2 ? (
        parsedJsonData
          .filter(
            (categoryOption) => categoryOption.Subcategory2 === optionName
          )
          .map((displayOption) => (
            <div
              onClick={() =>
                setSelectedSubcategory2(
                  displayOption.Subcategory2.replace(" ", "_")
                )
              }
            >
              <DisplayOptionThumb
                subcategory={subcategory}
                optionName={optionName}
                displayOption={displayOption}
              />
            </div>
          ))
      ) : (
        <h2>Coming Soon...</h2>
      )}
    </DisplaysInCategoryOptionPage>
  );
};

export default DisplaysInCategoryOption;
