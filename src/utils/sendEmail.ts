import emailjs from "@emailjs/browser";

export const sendEmail = (formData: HTMLFormElement) => {
  emailjs
    .sendForm(
      "service_0ino6rj",
      "template_qa9uomo",
      formData,
      "G09TWQrLr5z_FIESM"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
