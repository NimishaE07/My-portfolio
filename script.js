// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
// Project card click effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        // remove active class from all cards
        projectCards.forEach(c => c.classList.remove("active"));

        // add active class to clicked card
        card.classList.add("active");
    });
});
// CURSOR GLITTER EFFECT
document.addEventListener("mousemove", (e) => {
    const glitter = document.createElement("div");
    glitter.classList.add("cursor-glitter");

    glitter.style.left = `${e.clientX}px`;
    glitter.style.top = `${e.clientY}px`;

    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 800);
});
