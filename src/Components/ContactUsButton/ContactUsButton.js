import "./ContactUsButton.css";


const ContactUsButton = ({ contactUsClickHandler }) => {
  return (
    <button className='contactUsButton' onClick={contactUsClickHandler}>
      Contact Us
    </button>
   
  );
};

export default ContactUsButton;
