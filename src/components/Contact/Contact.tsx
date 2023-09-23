import "./contact.css";
export const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <form className="form">
        <label htmlFor="name" className="form__group">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form__input"
          />
        </label>
        <label htmlFor="email" className="form__group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form__input"
          />
        </label>
        <label htmlFor="email" className="form__group">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="form__textarea"
          ></textarea>
        </label>
        <button className="form__submit" type="submit">Send Message</button>
      </form>
    </section>
  );
};
