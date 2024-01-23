function setAudio(source) {
	document.getElementById("playbar").src = source;
	document.getElementById("playbar").play();
}

function playSong(source) {
	console.log(source);
	setAudio(source);
}