document.addEventListener("DOMContentLoaded", () => {
  // Efek Glitch pada teks highlight "STACK."
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

  // Log saat card diklik
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const skillName = card.querySelector("h2").innerText;
      console.log(`Skill selected: ${skillName}`);
    });
  });
});
