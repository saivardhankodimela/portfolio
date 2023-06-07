// Function to show the "About" section by default
function showDefaultSection() {
  const aboutSection = document.getElementById("about");
  aboutSection.style.display = "block";
}

// Function to show the selected section and hide the rest
function showSection(sectionId) {
  const sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetSectionId = event.target.getAttribute("href").substring(1);
    showSection(targetSectionId);
  });
});

// Show the "About" section by default when the page loads
window.addEventListener("load", showDefaultSection);

// Add this JavaScript code at the end of the <body> tag or in a separate JavaScript file

const skillTiles = document.querySelectorAll(".skill-tile");
const certificateOverlays = document.querySelectorAll(".certificate-overlay");
const closeButtons = document.querySelectorAll(".close-button");

skillTiles.forEach((tile, index) => {
  tile.addEventListener("click", () => {
    certificateOverlays.forEach((overlay, overlayIndex) => {
      if (overlayIndex === index) {
        overlay.classList.add("active");
      } else {
        overlay.classList.remove("active");
      }
    });
  });

  tile.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      certificateOverlays.forEach((overlay, overlayIndex) => {
        if (overlayIndex === index) {
          overlay.classList.add("active");
        } else {
          overlay.classList.remove("active");
        }
      });
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const overlay = event.target.parentElement;
    overlay.classList.remove("active");
  });
});

certificateOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    certificateOverlays.forEach((overlay) => {
      overlay.classList.remove("active");
    });
  }
});
