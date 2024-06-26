import { forwardRef } from "react";

interface Props {
  closeModal: () => void;
  closeModalOutside: (e: MouseEvent) => void;
  ref: React.RefObject<HTMLDialogElement>;
}
export const FormModal = forwardRef<HTMLDialogElement, Props>(
  (props: Props, ref) => {
    const { closeModal, closeModalOutside } = props;
    const handleDialogClick: React.MouseEventHandler<HTMLDialogElement> = (
      e
    ) => {
      closeModalOutside(e.nativeEvent as MouseEvent);
    };
    return (
      <dialog
        className="experienceItemModal"
        onClick={handleDialogClick}
        ref={ref}
      >
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
      </dialog>
    );
  }
);

FormModal.displayName = "FormModal";
