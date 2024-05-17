let songList = document.querySelector("#song-list");
let progress = document.querySelector("#progress");
let playBtn = document.querySelector("#play-btn");

let songs = [
  {
    name: "song1",
    id: 1,
  },
  {
    name: "song2",
    id: 2,
  },
  {
    name: "song3",
    id: 3,
  },
  {
    name: "song4",
    id: 4,
  },
];

let audio = new Audio("./media/song1.mp3");

// display all the songs
for (let song of songs) {
  const li = document.createElement("li");
  li.innerText = song.name;
  li.setAttribute("id", song.id);
  songList.append(li);
}

// play btn se gaana chalao
playBtn.addEventListener("click", function () {
  audio.paused ? audio.play() : audio.pause();
  if (playBtn.children[0].classList.contains("fa-play")) {
    playBtn.children[0].classList.remove("fa-play");
    playBtn.children[0].classList.add("fa-pause");
  } else {
    playBtn.children[0].classList.remove("fa-pause");
    playBtn.children[0].classList.add("fa-play");
  }
});

//current time dikhao
audio.addEventListener("timeupdate", function () {
  const currentProgress = (audio.currentTime * 100) / audio.duration;
  progress.value = currentProgress;
});

//input ke hisaab se gaana aage peeche hojaae
progress.addEventListener("change", function () {
  const updatedTime = (progress.value * audio.duration) / 100;
  audio.currentTime = updatedTime;
});

//gaana khud se select hojee
songList.addEventListener("click", function (e) {
  let songId = e.target.getAttribute("id");
  audio.src = `./media/song${songId}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});

// homework add right and left click features
