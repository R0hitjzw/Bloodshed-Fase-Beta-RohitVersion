const music = document.getElementById("music")
const btn = document.getElementById("muteBtn")
const icon = document.getElementById("muteIcon")

// volumen inicial (no tan alto)
music.volume = 0.3

// estado inicial: muteado por defecto o desde localStorage
let isMuted = localStorage.getItem("muted") === "false" ? false : true
music.muted = isMuted
icon.src = isMuted
    ? "./assets/projectImages/muteIcon.png"
    : "./assets/projectImages/unmuteIcon.png"

btn.addEventListener("click", () => {
    isMuted = !isMuted   // toggle
    music.muted = isMuted
    localStorage.setItem("muted", isMuted)

    icon.src = isMuted
        ? "./assets/projectImages/muteIcon.png"
        : "./assets/projectImages/unmuteIcon.png"

    if (!isMuted) music.play()
})
