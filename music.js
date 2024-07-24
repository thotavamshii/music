// const audio = document.getElementById('audio-player');
// const playPauseBtn = document.getElementById('play-pause');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const currentTimeEl = document.getElementById('current-time');
// const durationEl = document.getElementById('duration');
// const seekBar = document.getElementById('seek-bar');
// const songTitleEl = document.getElementById('song-title');
// const artistEl = document.getElementById('artist');

// // Update song info (replace with actual song data)
// songTitleEl.textContent = "Song Title";
// artistEl.textContent = "Artist";

// // Update duration on load
// audio.addEventListener('loadedmetadata', () => {
//   const minutes = Math,:, seconds = Math.floor(audio.duration / 60), remainder = audio.duration % 60;
//   durationEl.textContent = `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{remainder.toString().padStart(2, '0')}`;
// });

// // Play/Pause functionality
// playPauseBtn.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play();
//     playPauseBtn.textContent = 'Pause';
//   } else {
//     audio.pause();
//     playPauseBtn.textContent = 'Play';
//   }
// });

// // Update current time
// audio.addEventListener('timeupdate', () => {
//   const minutes = Math.floor(audio.currentTime / 60), seconds = Math.floor(audio.currentTime % 60);
//   currentTimeEl.textContent = `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{seconds.toString().padStart(2, '0')}`;
//   seekBar.value = (audio.currentTime / audio.duration) * 100;
// });

// // Seek functionality
// // seekBar.addEventListener('input', () => {
// //   const seekPosition = audio.duration * (seekBar.




// Get the audio element and player buttons
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

// Add event listeners to the player buttons
playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);

// Function to play the audio
function playAudio() {
  audio.play();
}

// Function to pause the audio
function pauseAudio() {
  audio.pause();
}

// Function to stop the audio
function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

// Load music metadata (e.g., song title, artist)
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

// Load audio file (e.g., MP3)
audio.src = 'path/to/audio/file.mp3';

// Update music metadata
songTitle.textContent = 'Song Title';
songArtist.textContent = 'Artist Name';
