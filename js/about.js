document.addEventListener("DOMContentLoaded", () => {
  // Efek Glitch pada teks highlight "ME."
  const highlightText = document.querySelector(".highlight");

  setInterval(() => {
    if (Math.random() > 0.85) {
      highlightText.style.backgroundColor = "transparent";
      highlightText.style.color = "var(--text)";
      highlightText.style.webkitTextStroke = "2px var(--text)";

      setTimeout(() => {
        highlightText.style.backgroundColor = "var(--text)";
        highlightText.style.color = "var(--bg)";
        highlightText.style.webkitTextStroke = "none";
      }, 150);
    }
  }, 800);
});
