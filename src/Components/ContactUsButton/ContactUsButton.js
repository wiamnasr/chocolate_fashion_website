import "./ContactUsButton.css";


const ContactUsButton = ({ contactUsClickHandler }) => {
  return (
    <button className='contactUsButtonSideBar' onClick={contactUsClickHandler}>
      Contact Us
    </button>
   
  );
};

export default ContactUsButton;
