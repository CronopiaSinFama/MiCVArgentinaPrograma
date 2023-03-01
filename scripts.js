console.log("Script ready");
const linkedinFloat = document.getElementById("linkedin-float");

window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    linkedinFloat.style.display = "none";
  } else {
    linkedinFloat.style.display = "block";
  }
});
