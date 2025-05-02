export function content() {
  const mainElement = document.createElement("main");

  const contentParagraph = document.createElement("p");
  contentParagraph.textContent = "To jest treść aplikacji. Parcel łączy pliki!";
  contentParagraph.style.textAlign = "center";
  contentParagraph.style.fontSize = "1.5rem";

  const imageUrl = new URL("./image.jpg", import.meta.url);

  const imageVariable = document.createElement("img");
  imageVariable.src = imageUrl.href;
  imageVariable.alt = "Example image";
  imageVariable.style.display = "block";
  imageVariable.style.margin = "0 auto";
  imageVariable.style.maxWidth = "25%";

  mainElement.appendChild(contentParagraph);
  mainElement.appendChild(imageVariable);

  return mainElement;
}
