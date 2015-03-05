
function counter () {
	if (counter.count == undefined) {
		counter.count = 0;
	} else {
		counter.count++;
		document.getElementById("counter").innerHTML = counter.count;
	}
}
