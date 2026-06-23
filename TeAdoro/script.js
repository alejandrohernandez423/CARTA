const scene = document.getElementById("scene");
const envelope = document.getElementById("envelope");

/* 💌 abrir carta */
envelope.addEventListener("click", () => {
    scene.classList.toggle("open");
});