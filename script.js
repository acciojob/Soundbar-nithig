//your JS code here. If required.
const sounds = ["clap", "boom", "hihat"]; // Add more sound names as needed

const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopAllSounds();
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
  });

  buttonsDiv.appendChild(btn);

  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

document.querySelector(".stop").addEventListener("click", stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}