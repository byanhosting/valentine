function ubahPesan() {
  const pesan = [
    "Aku bersyukur kenal kamu 💕",
    "Kamu bikin hari aku cerah ☀️",
    "Jangan lupa senyum 😄",
    "Happy Valentine Day 💖",
    "Semoga kamu bahagia selalu 🥰"
  ];
  const random = Math.floor(Math.random() * pesan.length);
  document.getElementById("text").innerHTML = pesan[random];
}

// BIKIN HUJAN HATI
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);
