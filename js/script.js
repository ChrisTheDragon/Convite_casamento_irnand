const cover = document.querySelector("#cover");
const book = document.querySelector("#book");
const seal = document.querySelector("#openSeal");
const music = document.querySelector("#music");
const soundToggle = document.querySelector("#soundToggle");

function updateSoundButton() {
  const isPlaying = !music.paused;

  soundToggle.classList.toggle("is-playing", isPlaying);
  soundToggle.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
}

function startMusic() {
  music.play()
    .then(updateSoundButton)
    .catch(updateSoundButton);
}

seal.addEventListener("click", () => {
  cover.classList.add("is-open");
  book.classList.add("is-ready");
  startMusic();
}, { once: true });

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

if (window.location.hash === "#menu") {
  cover.classList.add("is-open");
  book.classList.add("is-ready");
  swiper.slideTo(3, 0);
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
