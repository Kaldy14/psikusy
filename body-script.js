const formElement = document.getElementById("formSearchForm");
const headerElement = document.getElementById("header");

const targetDiv = headerElement ? headerElement.querySelector("div") : null;

if (formElement && targetDiv) {
  targetDiv.style.paddingBottom = "3rem";
  formElement.style.width = "75%";

  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "form-wrapper";

  wrapperDiv.appendChild(formElement);

  targetDiv.appendChild(wrapperDiv);
} else {
  console.error("Relocation of form failed");
}

if (window.location.pathname === "/") {
  const welcomeWrapper = document.querySelector(".welcome-wrapper");
  const contentElement = document.getElementById("content");

  if (welcomeWrapper && contentElement) {
    contentElement.prepend(welcomeWrapper);
  } else {
    console.error("Changing of texts in welcome page failed");
  }
}
