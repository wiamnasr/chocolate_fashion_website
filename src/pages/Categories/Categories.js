import CategoriesThumb from "../../Components/CategoriesThumb/CategoriesThumb";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContactUsModal from "../../Components/ContactUsModal/ContactUsModal";

import { CategoriesPage, CategoriesList } from "./Categories.styles";

const WebsiteCategories = [
  {
    key: "SO",
    name: "Special Occasions",
    categoryImageUrl: "",
  },
  {
    key: "EN",
    name: "Engagements",
    categoryImageUrl: "",
  },
  {
    key: "EV",
    name: "Events",
    categoryImageUrl: "",
  },
  {
    key: "GG",
    name: "Gift Giving",
    categoryImageUrl: "",
  },

  {
    key: "WD",
    name: "Window Displays",
    categoryImageUrl: "",
  },
];

const Categories = ({
  setSelectedCategory,
  contactUsShowModal,
  setContactUsShowModal,
  windowDimension,
}) => {
  return (
    <CategoriesPage>
      <Sidebar windowDimension={windowDimension} />
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
      {contactUsShowModal ? (
        <ContactUsModal setContactUsShowModal={setContactUsShowModal} />
      ) : null}
    </CategoriesPage>
  );
};

export default Categories;
