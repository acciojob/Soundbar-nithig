const sounds = ["clap", "boom", "hihat"]; // Add more sound names if needed

const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
  // Create button
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  // Button click plays sound
  btn.addEventListener("click", () => {
    stopAllSounds();
    const audio = document.getElementById(sound);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  buttonsDiv.appendChild(btn);

  // Create audio tag
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
