const formElement = document.getElementById("formSearchForm");
const headerElement = document.getElementById("header");

const targetDiv = headerElement ? headerElement.querySelector("div") : null;

if (formElement && targetDiv) {
  targetDiv.style.paddingBottom = "3rem";
  targetDiv.appendChild(formElement);
} else {
  console.error("Relocation of form failed");
}
