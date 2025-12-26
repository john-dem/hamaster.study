function playVideo(src) {
  const player = document.getElementById("player");
  player.src = src;
  player.play();
}
