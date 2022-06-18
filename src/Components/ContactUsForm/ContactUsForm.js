import { useForm, ValidationError } from "@formspree/react";

import "./ContactUsForm.css";

function ContactUsForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form method='POST' onSubmit={handleSubmit} className='form'>
      <label htmlFor='name' className='contactUsFormField'>
        Full Name
      </label>
      <input id='name' type='text' name='name' required />
      <ValidationError prefix='Name' field='name' errors={state.errors} />

      <label htmlFor='email' className='contactUsFormField'>
        Email Address
      </label>
      <input id='email' type='email' name='email' required />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label htmlFor='message' className='contactUsFormField'>
        Message
      </label>
      <textarea
        id="contactUsFormMessageField"
        name='message'
        required
      ></textarea>
      <ValidationError
        prefix='Message'
        field='message'
        errors={state.errors}
        className='fieldErrors'
      />

      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} className='formErrors' />
    </form>
  );
}

export default ContactUsForm;
