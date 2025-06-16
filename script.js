function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

// Typewriter effect
const text = "Hello! I'm Roshan Lamichhane Magar. An IT management student studying in South Korea from this year, and I like to explore myself.";
const typewriterTarget = document.getElementById("typewriter-text");

let index = 0;
function typeWriter() {
  if (index < text.length) {
    typewriterTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // typing speed in ms
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
