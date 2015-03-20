
//function get current client time and prins it to #time each second

function changeTime () {
	var date = new Date();
	var hour = date.getHours();
	if (hour > 12) {
		hour = hour - 12;
	};
	 if (hour < 10) {
		hour = "0" + hour;
	};
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	};
	var second = date.getSeconds();
	if (second < 10) {
		second = "0" + second;
	};

	var cur_time = hour * 3600 + minute * 60 + second;


	var elem = document.getElementById("time");
	elem.innerHTML = hour + ":" + minute + ":" + second;

	setTimeout("changeTime()", 1000);
}



function cur_color() {
	var time = new Date();
	var hour = time.getHours();
	if (hour > 12) {
		hour = hour - 12;
	};
	 if (hour < 10) {
		hour = "0" + hour;
	};
	var minute = time.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	};
	var second = time.getSeconds();
	if (second < 10) {
		second = "0" + second;
	};
	var millisecond = time.getMilliseconds();

	var color = "#" + (hour * 3600 + minute * 60 * 1000+ second * 1000).toString(16);

	document.getElementById("color").innerHTML = color.toUpperCase();
	document.getElementById("body").style.backgroundColor = color;

	
	setTimeout("cur_color()", 1000);
}


