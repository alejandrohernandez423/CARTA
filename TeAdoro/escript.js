const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", async () => {
    if(!playing){
        await music.play();
        musicBtn.innerText = "⏸";
    } else {
        music.pause();
        musicBtn.innerText = "▶️";
    }
    playing = !playing;
});

const noBtn = document.getElementById("no");
const siBtn = document.getElementById("si");
const text = document.getElementById("text");

const frases = [
"¿Segura? 🥺",
"Piénsalo otra vez 💜",
"No huyas 😭",
"Andaleee 💜",
"Mi corazón 💔",
"Dale a sí 💜"
];

let i = 0;

function moveButton(){

const padding = 10;

const rect = noBtn.getBoundingClientRect();

// viewport REAL visible (más estable que innerWidth)
const vw = document.documentElement.clientWidth;
const vh = document.documentElement.clientHeight;

// límites seguros
let x = Math.random() * (vw - rect.width - padding);
let y = Math.random() * (vh - rect.height - padding);

// clamp duro (esto es lo que evita el bug)
x = Math.min(Math.max(padding, x), vw - rect.width - padding);
y = Math.min(Math.max(padding, y), vh - rect.height - padding);

// aplicar
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

text.innerText = frases[Math.min(i, frases.length - 1)];
i++;

}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

siBtn.addEventListener("click", () => {

document.getElementById("main").innerHTML = `
<h1>💜 ¡Sabía que dirías que sí!</h1>

<p>Elige nuestra fecha 💌</p>

<input type="date" id="date"
min="2026-06-28"
max="2026-06-28"
style="padding:12px;font-size:18px;border-radius:10px;border:none;margin:20px;">

<br>

<button id="confirm"
style="background:#7f00ff;color:white;padding:12px 25px;border:none;border-radius:10px;cursor:pointer;">
Confirmar 💜
</button>

<p id="msg"></p>
`;

const date = document.getElementById("date");
const btn = document.getElementById("confirm");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {

if(date.value !== "2026-06-28"){
msg.innerText = "💜 Esa no es la fecha correcta";
return;
}

document.body.innerHTML = `
<div class="final-screen">

    <video class="final-video" autoplay muted loop>
        <source src="fondo.mp4" type="video/mp4">
    </video>

    <div class="final-content">
        <h1>💜 TE AMO 💜</h1>
        <p>Espero que ese día nos divirtamos mucho juntos ✨</p>
    </div>

</div>
`;

});

});