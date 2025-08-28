// Open game window
function openGame(url) {
  window.location.href = url;
}

// Light/Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    modeToggle.textContent = "🌙 Dark Mode";
  } else {
    modeToggle.textContent = "🌞 Light Mode";
  }
});

// CTRL + Q to hide screen (redirect)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "q") {
    window.location.href = "https://www.google.com"; // Change to safe page
  }
});
