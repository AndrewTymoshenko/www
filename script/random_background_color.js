function random_background_color () {
	var random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	document.getElementById("body").style.background = random_color;
	document.getElementById("color").innerHTML = random_color.toUpperCase();
}