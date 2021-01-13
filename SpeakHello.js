(function(window) {
	let speakWord = "Hello";
	const helloSpeaker = (name) = {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
