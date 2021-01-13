(function(window) {
	let speakWord = "Good Bye";
	const byeSpeaker = (name) => {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
