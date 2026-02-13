function ubahPesan() {
    const pesan = [
        "Aku bersyukur kenal kamu 💕",
        "Kamu bikin hari aku lebih cerah ☀️",
        "Jangan lupa senyum ya 😄",
        "Happy Valentine Day 💖",
        "Aku harap kamu selalu bahagia 🥰"
    ];

    const random = Math.floor(Math.random() * pesan.length);
    document.getElementById("text").innerHTML = pesan[random];
}
