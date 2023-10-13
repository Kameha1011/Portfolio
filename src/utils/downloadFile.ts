export const downloadFile = (url: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName; // Replace with the desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
