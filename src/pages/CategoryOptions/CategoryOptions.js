import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { CategoryOptionsList } from "./CategoryOptions.styles";
import { useParams } from "react-router-dom";

const WebsiteCategoryOptions = {
  Special_Occasions: [
    {
      key: "SO-new_born",
      name: "New Born",
      optionImageUrl: "",
      description: "New Born",
      selectedCategory: "Special_Occasions",
    },
    {
      key: "SO-weddings",
      name: "Weddings",
      optionImageUrl: "",
      description: "Weddings",
      selectedCategory: "Special_Occasions",
    },
    {
      key: "SO-baptism",
      name: "Baptism",
      optionImageUrl: "",
      description: "Baptism",
      selectedCategory: "Special_Occasions",
    },
    {
      key: "SO-communion",
      name: "Communion",
      optionImageUrl: "",
      description: "Communion",
      selectedCategory: "Special_Occasions",
    },
    {
      key: "SO-engagements",
      name: "Engagements",
      optionImageUrl: "",
      description: "Engagements",
      selectedCategory: "Special_Occasions",
    },
  ],
  Window_Displays: [
    {
      key: "WD-swan_lake",
      name: "Swan Lake",
      optionImageUrl: "",
      description: "Swan Lake",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-StormyX-mas",
      name: "Stormy X-mas",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4659.JPG",
      description: "Stormy X-mas",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-easterBunny",
      name: "Easter Bunny",
      optionImageUrl: "",
      description: "Easter Bunny",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-valentinesDay",
      name: "Valentines Day",
      optionImageUrl: "",
      description: "Valentines Day",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-fall",
      name: "Fall",
      optionImageUrl: "",
      description: "Fall",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-flyingBoxes",
      name: "Flying Boxes",
      optionImageUrl: "",
      description: "Flying Boxes",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-nutcracker",
      name: "Nutcracker",
      optionImageUrl: "",
      description: "Nutcracker",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-rockingHorseAndBallerinaDancer",
      name: "Rocking Horse and Ballerina Dancer",
      optionImageUrl: "",
      description: "Rocking Horse and Ballerina Dancer",
      selectedCategory: "Window_Displays",
    },
    {
      key: "WD-TreeDeer",
      name: "Tree, Deer",
      optionImageUrl: "",
      description: "Tree, Deer",
      selectedCategory: "Window_Displays",
    },
  ],

  Events: [
    {
      key: "EV-VIPXmasDinner",
      name: "VIP X_mas Dinner",
      optionImageUrl: "",
      description: "VIP X_mas Dinner",
      selectedCategory: "Events",
    },
    {
      key: "EV-CelebratingTheSeason",
      name: "Celebrating The Season",
      optionImageUrl: "",
      description: "Celebrating the Season",
      selectedCategory: "Events",
    },
    {
      key: "EV-babyFirstTooth",
      name: "Baby First Tooth",
      optionImageUrl: "",
      description: "Baby First Tooth",
      selectedCategory: "Events",
    },
    {
      key: "EV-special_birthday_celebration",
      name: "Special Birthday Celebration",
      optionImageUrl: "",
      description: "Special Birthday Celebration",
      selectedCategory: "Events",
    },
    {
      key: "EV-arrangements",
      name: "Arrangements",
      optionImageUrl: "",
      description: "Arrangements",
      selectedCategory: "Events",
    },
    {
      key: "EV-imperialNativityScene",
      name: "Imperial Nativity Scene",
      optionImageUrl: "",
      description: "Arrangements",
      selectedCategory: "Events",
    },
  ],
  Souvenirs: [],
};

const CategoryOptions = ({ setSelectedSubcategory }) => {
  const { subcategory } = useParams();
  if (subcategory !== "Souvenirs") {
    console.log(subcategory);
    const CategoryOptionsToMap = WebsiteCategoryOptions[subcategory];
    // console.log(CategoryOptionsToMap);
    return (
      <CategoryOptionsList>
        <Sidebar />
        {CategoryOptionsToMap.map((categoryOption) => (
          <li
            key={categoryOption.key}
            onClick={() => setSelectedSubcategory(categoryOption.name)}
            className='categoryOptionsListItem'
          >
            <CategoryOptionsThumb
              description={categoryOption.description}
              optionImageUrl={categoryOption.optionImageUrl}
              subcategory={subcategory}
              optionName={categoryOption.name}
            />
          </li>
        ))}
      </CategoryOptionsList>
    );
  }
};

export default CategoryOptions;
