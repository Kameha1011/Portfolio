interface Props {
  closeModal: () => void;
}
export const FormModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="experienceItemModal__bg">
      <div className="experienceItemModal">
        <div className="experienceItemModal__header">
          <h2 className="experienceItemModal__title">Thanks You!</h2>
        </div>
        <div className="experienceItemModal__body">
          <p>Your message has been sent!</p>
        </div>
        <div className="experienceItemModal__footer">
          <button className="experienceItemModal__button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
