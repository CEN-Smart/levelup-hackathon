const toggleBtn = document.querySelector(".drop-down--toggle");

const chevronDown = document.querySelector(".chevron-down");
const chevronUp = document.querySelector(".chevron-up");
const checked = document.querySelectorAll(".checked");
toggleBtn.addEventListener("click", () => {
  const content = document.querySelector(".drop-down--content");
  // display content as block or none
  content.classList.toggle("active");
  // toggle chevron icons
  chevronDown.style.display =
    chevronDown.style.display === "none" ? "block" : "none";
  chevronUp.style.display =
    chevronUp.style.display === "block" ? "none" : "block";
});

checked.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
