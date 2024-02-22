const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");
const mobileSection = document.querySelector(".mobile-section");

toggleSidebarBtn.addEventListener("click", (e) => {
  if (mobileSection.classList.contains("-right-40")) {
    mobileSection.classList.remove("-right-40");
    mobileSection.classList.add("right-0");
  } else {
    mobileSection.classList.remove("right-0");
    mobileSection.classList.add("-right-40");
  }
});
