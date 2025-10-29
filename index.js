// Optional: Scroll reveal animation for feature cards
window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// // Reveal animation for steps
// window.addEventListener("scroll", () => {
//   document.querySelectorAll(".step-card").forEach((card) => {
//     const rect = card.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       card.classList.add("show");
//     }
//   });
// });
