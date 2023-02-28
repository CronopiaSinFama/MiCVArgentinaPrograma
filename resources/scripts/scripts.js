console.log("script ready");

const linkedinFloat = document.getElementById("linkedin-float");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    linkedinFloat.style.display = "block";
  } else {
    linkedinFloat.style.display = "none";
  }
});

