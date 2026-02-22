
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-section video');


const mainVideo = 'videos/HeroVideo.mp4';
const movieList = [
  'videos/HeroVideo1.mp4',
  mainVideo
];

let index = 0;

nextButton.addEventListener('click', () => {
  video.src = movieList[index];
  video.load();
  video.play();

  index = (index + 1) % movieList.length;
});


const music = document.getElementById("bg-music");
const soundIcon = document.getElementById("sound-icon");
let isPlaying = true;

window.addEventListener("load", () => {
  music.play().catch(() => {
    isPlaying = false;
    soundIcon.src = "images/music-off.gif";
  });
});

document.getElementById("music-toggle").addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    soundIcon.src = "images/music-off.gif";
  } else {
    music.play();
    soundIcon.src = "images/music-on.gif";
  }
  isPlaying = !isPlaying;
});

document.querySelectorAll(".card").forEach(card => {
  const link = card.querySelector("a"); // get the card link
  if (link) {
    card.style.cursor = "pointer";

    card.addEventListener("click", (e) => {

      if (e.target.tagName.toLowerCase() !== "a") {
        window.open(link.href, link.target || "_self");
      }
    });
  }
});
