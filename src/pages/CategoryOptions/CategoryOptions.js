import CategoryOptionsThumb from "../../Components/CategoryOptionsThumb/CategoryOptionsThumb";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { CategoryOptionsList } from "./CategoryOptions.styles";

const WebsiteCategoryOptions = {
  Special_Occasions: [
    {
      key: "SO-new_born",
      name: "New Born",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2416.JPG",
      description: "New Born Description Placeholder",
    },
    {
      key: "SO-weddings",
      name: "Weddings",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4989.JPG",
      description: "Weddings Description Placeholder",
    },
    {
      key: "SO-baptism",
      name: "Baptism",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2419.JPG",
      description: "Baptism Description Placeholder",
    },
    {
      key: "SO-communion",
      name: "Communion",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2597.JPG",
      description: "Communion Description Placeholder",
    },
  ],
  Window_Displays: [
    {
      key: "WD-swan_lake",
      name: "Swan_lake",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2725.JPG",
      description: "Swan Lake Description Placeholder",
    },
    {
      key: "WD-murano",
      name: "Murano",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_3910.JPG",
      description: "Murano Description Placeholder",
    },
    {
      key: "WD-christmas",
      name: "Christmas",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4659.JPG",
      description: "Christmas Description Placeholder",
    },
    {
      key: "WD-easter",
      name: "Easter",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4661.JPG",
      description: "Easter Description Placeholder",
    },
    {
      key: "WD-valentines",
      name: "Valentines",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4989.JPG",
      description: "Valentines Description Placeholder",
    },
  ],

  Events: [
    {
      key: "EV-royal_christmas_dinner",
      name: "Royal Christmas Dinner",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_5027.JPG",
      description: "Royal Christmas Dinner Description Placeholder",
    },
    {
      key: "EV-christmas",
      name: "Christmas",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_1063.JPG",
      description: "Christmas Description Placeholder",
    },
    {
      key: "EV-first_tooth",
      name: "First Tooth",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_1268.JPG",
      description: "First Tooth Description Placeholder",
    },
    {
      key: "EV-special_birthdays",
      name: "Special Birthdays",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2223.JPG",
      description: "Special Birthdays Description Placeholder",
    },
    {
      key: "EV-arrangements",
      name: "Arrangements",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2232.JPG",
      description: "Arrangements Description Placeholder",
    },
  ],
};

const CategoryOptions = ({ selectedCategory, setSelectedCategoryOption }) => {
  if (selectedCategory !== "Gifting") {
    console.log(selectedCategory);
    const CategoryOptionsToMap = WebsiteCategoryOptions[selectedCategory];
    console.log(CategoryOptionsToMap);
    return (
      <CategoryOptionsList>
        <Sidebar />
        {CategoryOptionsToMap.map((categoryOption, index) => (
          <li
            key={categoryOption.key}
            onClick={() => setSelectedCategoryOption(categoryOption.key)}
            className='categoryOptionsListItem'
          >
            <CategoryOptionsThumb
              selectedCategory={selectedCategory}
              categoryOptionKey={categoryOption.key}
              description={categoryOption.description}
              optionImageUrl={categoryOption.optionImageUrl}
            />
          </li>
        ))}
      </CategoryOptionsList>
    );
  }
};

export default CategoryOptions;
