const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll("img");
const hideButtons = document.querySelectorAll(".hide-button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    images[index].style.display = "block";
    hideButtons[index].style.display = "block";
  });
});

hideButtons.forEach((hideButton, index) => {
  hideButton.addEventListener("click", () => {
    images[index].style.display = "none";
    hideButton.style.display = "none";
  });
});
