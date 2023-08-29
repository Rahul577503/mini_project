document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".text");
    const words = ["Front-End Developer", "Programmer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let direction = 1;
  
    function type() {
      if (direction === 1) {
        if (letterIndex < words[wordIndex].length) {
          textElement.textContent += words[wordIndex].charAt(letterIndex);
          letterIndex++;
          setTimeout(type, 100);
        } else {
          direction = -1;
          setTimeout(type, 1000);
        }
      } else if (direction === -1) {
        if (letterIndex > 0) {
          textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
          letterIndex--;
          setTimeout(type, 50);
        } else {
          direction = 1;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
        }
      }
    }   
type();
});

// JavaScript function to toggle color mode
function toggleColorMode() {
const colorSwitchable = document.querySelector(".color-switchable");
const toggleButton = document.getElementById("toggle-color");

if (colorSwitchable.classList.contains("dark-mode")) {
  colorSwitchable.classList.remove("dark-mode");
  toggleButton.textContent = "Dark Mode";
} else {
  colorSwitchable.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode";
}
}

toggleColorMode();