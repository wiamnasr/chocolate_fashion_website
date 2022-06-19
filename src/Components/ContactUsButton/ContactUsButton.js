import "./ContactUsButton.css";

const ContactUsButton = ({ contactUsClickHandler }) => {
  return (
    <button
      className='contactUs'
      style={{ color: "inherit" }}
      onClick={contactUsClickHandler}
    >
      Contact Us
    </button>
  );
};

export default ContactUsButton;
