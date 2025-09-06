// Animasi bruh sederhana: fade-in pada project
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((proj, i) => {
    proj.style.opacity = "0";
    proj.style.transform = "translateY(30px)";
    setTimeout(() => {
      proj.style.transition = "all .6s ease";
      proj.style.opacity = "1";
      proj.style.transform = "translateY(0)";
    }, i * 200);
  });
});
