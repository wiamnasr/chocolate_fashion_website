import CategoriesThumb from "../../Components/CategoriesThumb/CategoriesThumb";
import Sidebar from "../../Components/Sidebar/Sidebar";

import { CategoriesPage, CategoriesList } from "./Categories.styles";

const WebsiteCategories = [
  {
    key: "SO",
    name: "Special_Occasions",
    categoryImageUrl:
      "https://storage.googleapis.com/chocolatefashionsignature.com/Categories/CAT-Special_Occasions.jpg",
  },
  {
    key: "WD",
    name: "Window_Displays",
    categoryImageUrl:
      "https://storage.googleapis.com/chocolatefashionsignature.com/Categories/CAT-Window_Displays.png",
  },
  {
    key: "EV",
    name: "Events",
    categoryImageUrl:
      "https://storage.googleapis.com/chocolatefashionsignature.com/Categories/CAT-Events.jpg",
  },
  {
    key: "GI",
    name: "Gifting",
    categoryImageUrl:
      "https://storage.googleapis.com/chocolatefashionsignature.com/Categories/CAT-Gifting.jpg",
  },
];

const Categories = ({ setSelectedCategory }) => {
  return (
    <CategoriesPage>
      <Sidebar />
      <CategoriesList>
        {WebsiteCategories.map((category) => (
          <li
            key={category.key}
            onClick={() => setSelectedCategory(category.name)}
            className='categoryListItem'
          >
            <CategoriesThumb
              categoryOptionImageUrl={category.categoryImageUrl}
              categoryOption={category.name}
            />
          </li>
        ))}
      </CategoriesList>
    </CategoriesPage>
  );
};

export default Categories;
