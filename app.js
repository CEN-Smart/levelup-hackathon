const toggleBtn = document.querySelector(".drop-down--toggle");

const chevronDown = document.querySelector(".chevron-down");
const chevronUp = document.querySelector(".chevron-up");

toggleBtn.addEventListener("click", () => {
  const content = document.querySelector(".drop-down--content");
  // display content as block or none
  content.style.display = content.style.display === "block" ? "none" : "block";
  // toggle chevron icons
  chevronDown.style.display =
    chevronDown.style.display === "none" ? "block" : "none";
  chevronUp.style.display =
    chevronUp.style.display === "block" ? "none" : "block";
});
