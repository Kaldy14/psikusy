const formElement = document.getElementById("formSearchForm");
const targetElement = document.getElementById("header");
if (formElement && targetElement) {
  targetElement.prepend(formElement);
} else {
  console.error("Either the form or the target element was not found.");
}
