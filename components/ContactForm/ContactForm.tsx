import { useForm, ValidationError } from "@formspree/react";
import s from "./ContactForm.module.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from "react";

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const [state, handleSubmit] = useForm("mayzoodl");
  
  if (state.succeeded) {
    return (
        <div style={{marginTop: '50px', display: 'flex', gap: '10px'}}>
        <h4>Thanks for your message, i'll be in touch ASAP</h4>
        <CheckCircleIcon style={{color: 'green'}}/>
        </div>
    )
  }



  return (
    <form className={s.formStyle} onSubmit={handleSubmit}>
      <div className={s.inputContainer}>
        <div className={s.inputCol}>
          <label htmlFor="name">Name</label>
          <input
            className={s.inputStyle}
            id="name"
            type="name"
            name="name"
            required
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className={s.inputCol}>
          <label htmlFor="email">Email</label>
          <input
            className={s.inputStyle}
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <label htmlFor="message">Message</label>
      <textarea
        className={s.messageInput}
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <button
          style={{
            width: "50%",
            border: "2px solid #1B1B1B",
            borderRadius: "30px",
            padding: "10px",
            background: "black",
            cursor: "pointer",
            color: 'white',
            fontSize: '16px'
          }}
          type="submit"
          disabled={state.submitting}
        >
            Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
