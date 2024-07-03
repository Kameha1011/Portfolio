import { useRef } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const openModal = (): void => {
    modalRef.current?.showModal();
    document.body.style.overflowY = "hidden";
  };
  const closeModal = (): void => {
    modalRef.current?.close();
    document.body.style.overflowY = "scroll";
  };
  const closeModalOutside = (e: MouseEvent): void => {
    const dialogDimensions =
      modalRef.current?.getBoundingClientRect() as DOMRect;
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  };
  return { modalRef, openModal, closeModal, closeModalOutside };
};
