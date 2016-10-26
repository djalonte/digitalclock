function timer () {
	var date = new Date();

	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var milliseconds = document.getElementById("milliseconds");
	var amPm = document.getElementById("amPm");

	var time = {
		"hours": date.getHours(),
		"minutes": date.getMinutes(),
		"seconds": date.getSeconds(),
		"milliseconds": date.getMilliseconds(),
		"amPm": "AM"
	}

	if (time.hours > 12) {
		time.hours -= 12;
		time.amPm = "PM";
	} 
	
	if (time.hours < 10) {
		hours.innerHTML = "0" + time.hours;
	}	else{
		hours.innerHTML = time.hours;
	}

	if (time.minutes < 10) {
		minutes.innerHTML = "0" + time.minutes
	}	else{
		minutes.innerHTML = time.minutes;
	}

	if (time.seconds < 10) {
		seconds.innerHTML = "0" + time.seconds
	}	else{
		seconds.innerHTML = time.seconds;
	}

	if (time.milliseconds < 10) {
		milliseconds.innerHTML = "00" + time.milliseconds
	}	else if (time.milliseconds < 100) {
		milliseconds.innerHTML = "0" + time.milliseconds
	}

	else{
		milliseconds.innerHTML = time.milliseconds;
	}


	amPm.innerHTML = time.amPm;
	setTimeout(timer, 100);
}
timer();