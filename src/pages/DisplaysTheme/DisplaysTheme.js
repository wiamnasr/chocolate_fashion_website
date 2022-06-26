import { DisplaysThemePage } from "./DisplaysTheme.styles";
import DisplayThemeThumb from "../../Components/DisplayTheme/DisplayThemeThumb";

const WebsiteCategoryOptions = {
  Special_Occasions: [
    {
      key: "SO-new_born",
      name: "New Born",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2416.JPG",
      description: "New Born Description Placeholder",
      subcategories: [
        {
          name: "Baby_Boy",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "100%_Cute",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Hot_Air_Balloon",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Little_Amir",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Luxurious_Baby_Boy_Tray",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Majestic_White_Bird",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "My_Teddy_Bear_Family",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
          ],
        },
        {
          name: "Baby_Girl",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "Ballerina",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Kylie_Lavender",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Luxurious_Baby_Girl_Tray",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "My_Coco_Chanel",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Orchid",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Sama_is_Born",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
          ],
        },
      ],
    },
    {
      key: "SO-weddings",
      name: "Weddings",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_4989.JPG",
      description: "Weddings Description Placeholder",
      subcategories: [
        {
          name: "All_Weddings",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "Classic_Wedding_Bar_Setup",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Classy_Vintage",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Elegant_Wedding_Gharib",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Johnny_Walker_Prime_Elio",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Marry_Rose",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "VIP_Mendelek_Wedding",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Wedding_Dress_Nathalie",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "With_Love",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
          ],
        },
      ],
    },
    {
      key: "SO-baptism",
      name: "Baptism",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2419.JPG",
      description: "Baptism Description Placeholder",
      subcategories: [
        {
          name: "All_Baptism",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "Charbel",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "I_am_a_Child_of_God_Jesus_De_Prague",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "John_Gold",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Selena",
              displayCoverUrl: "",
              displayPicturesUrlCategoryOptions: [],
            },
          ],
        },
      ],
    },
    {
      key: "SO-communion",
      name: "Communion",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2597.JPG",
      description: "Communion Description Placeholder",
      subcategories: [
        {
          name: "All_Communion",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "2_Angels",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Calice",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Crystal_Cross",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Lynn",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Rhea",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
          ],
        },
      ],
    },
  ],
  Window_Displays: [
    {
      key: "WD-swan_lake",
      name: "Swan_lake",
      optionImageUrl:
        "https://storage.googleapis.com/chocolatefashionsignature.com/Homepage-Slideshow/IMG_2725.JPG",
      description: "Swan Lake Description Placeholder",
      subcategories: [
        {
          name: "All Window Display",
          displaysCoverUrl: "",
          displays: [
            {
              displayName: "Swan_Lake",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
            {
              displayName: "Valentines_Day",
              displayCoverUrl: "",
              displayPicturesUrls: [],
            },
          ],
        },
      ],
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

const DisplaysTheme = ({
  selectedCategory,
  selectedCategoryOption,
  selectedDisplaysTheme,
  setSelectedDisplayToShow,
}) => {
  return (
    <DisplaysThemePage>
      {WebsiteCategoryOptions[selectedCategory][0].subcategories ? (
        WebsiteCategoryOptions[selectedCategory]
          .filter(
            (categoryOption) => categoryOption.key === selectedCategoryOption
          )[0]
          .subcategories.filter(
            (subcategory) => subcategory.name === selectedDisplaysTheme
          )[0]
          .displays.map((display) => (
            <div onClick={() => setSelectedDisplayToShow(display.displayName)}>
              <DisplayThemeThumb display={display} />
            </div>
          ))
      ) : (
        <h2>Coming Soon</h2>
      )}
    </DisplaysThemePage>
  );
};

export default DisplaysTheme;
