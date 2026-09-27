const cover = document.querySelector("#cover");
const book = document.querySelector("#book");
const seal = document.querySelector("#openSeal");
const music = document.querySelector("#music");
const soundToggle = document.querySelector("#soundToggle");
const finalBackButton = document.querySelector("#finalBackButton");

function updateSoundButton() {
  const isPlaying = !music.paused;

  soundToggle.classList.toggle("is-playing", isPlaying);
  soundToggle.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
}

function startMusic() {
  return music.play()
    .then(() => {
      updateSoundButton();
    })
    .catch((error) => {
      updateSoundButton();
      console.error("Não foi possível iniciar a música:", error);
    });
}

seal.addEventListener("click", () => {
  // O play() ocorre dentro do clique do usuário para funcionar em navegadores mobile.
  startMusic();
  cover.classList.add("is-open");
  book.classList.add("is-ready");
});

soundToggle.addEventListener("click", () => {
  if (music.paused) {
    startMusic();
    return;
  }

  music.pause();
  updateSoundButton();
});

music.addEventListener("play", updateSoundButton);
music.addEventListener("pause", updateSoundButton);

const swiper = new Swiper(".swiper", {
  effect: "flip",
  grabCursor: true,
  speed: 780,
  resistanceRatio: 0.7,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});

finalBackButton.addEventListener("click", () => {
  swiper.slidePrev();
});

if (window.location.hash === "#menu") {
  cover.classList.add("is-open");
  book.classList.add("is-ready");
  swiper.slideTo(3, 0);

  if (sessionStorage.getItem("playMusicOnReturn") === "true") {
    sessionStorage.removeItem("playMusicOnReturn");
    startMusic();
  }
}

document.querySelectorAll(".book .page[role='button']").forEach((page) => {
  page.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    swiper.slideNext();
  });

  page.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    swiper.slideNext();
  });
});
