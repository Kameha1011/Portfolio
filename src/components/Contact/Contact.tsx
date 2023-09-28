import { useRef, useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { FormModal } from "./FormModal/FormModal";
import "./contact.css";

export const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(form.current!);
    form.current!.reset();
    setIsOpen(true);
  };
  return (
    <>
      <section className="contact">
        <h2 className="contact__title">Contact</h2>
        <form ref={form} className="form" onSubmit={submitForm}>
          <label htmlFor="user_name" className="form__group">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              className="form__input"
              required
            />
          </label>
          <label htmlFor="user_email" className="form__group">
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              className="form__input"
              required
            />
          </label>
          <label htmlFor="user_message" className="form__group">
            <textarea
              name="user_message"
              id="message"
              placeholder="Message"
              className="form__textarea"
              required
            ></textarea>
          </label>
          <button className="form__submit" type="submit">
            Send Message
          </button>
        </form>
      </section>
      {isOpen && <FormModal closeModal={() => setIsOpen(false)} />}
    </>
  );
};
