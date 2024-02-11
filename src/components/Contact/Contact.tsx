import { useRef } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { FormModal } from "./FormModal/FormModal";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import "./contact.css";
import { useModal } from "../hook/useModal";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { modalRef, openModal, closeModal, closeModalOutside } = useModal();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(form.current!);
    form.current!.reset();
    openModal();
  };
  return (
    <>
      <section className="contact" id="Contact">
        <h2 className="section__title">Contact</h2>
        <div className="contact__container">
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
          <div className="contact__follow">
            <h2 className="contact__title">Follow me</h2>
            <div className="contact__links">
              <a
                href="https://www.linkedin.com/in/omar-flores2001/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
                className="contact__link"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Kameha1011"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="contact__link"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.instagram.com/omrflrs01/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="contact__link"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
      <FormModal
        ref={modalRef}
        closeModal={closeModal}
        closeModalOutside={closeModalOutside}
      />
    </>
  );
};
