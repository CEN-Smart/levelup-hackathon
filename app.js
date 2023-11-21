const toggleBtn = document.querySelector(".drop-down--toggle");
const chevronDown = document.querySelector(".chevron-down");
const chevronUp = document.querySelector(".chevron-up");
const checked = document.querySelectorAll(".checked");

const numProgress = document.querySelector(".progress-num");
const progress = document.querySelector(".progress");

const dropMenu = document.querySelector(".drop-menu--container");

const alert = document.querySelector(".alert-container");

const userProfile = document.querySelector(".user-profile");

const overlay = document.querySelector(".overlay");

const notify = document.querySelector(".user-notify");

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
    if (item.classList.contains("active")) {
      numProgress.textContent = parseInt(numProgress.textContent) + 1;
      progress.value = parseInt(progress.value) + 1;
    } else {
      numProgress.textContent = parseInt(numProgress.textContent) - 1;
      progress.value = parseInt(progress.value) - 1;
    }
  });
});

userProfile.addEventListener("click", () => {
  dropMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  dropMenu.classList.remove("active");
  overlay.classList.remove("active");
  alert.classList.remove("active");
});

notify.addEventListener("click", () => {
  alert.classList.toggle("active");
  overlay.classList.toggle("active");
});
