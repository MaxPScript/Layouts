log = console.log;
log("grid");

// data = {
//     "Samsung": [
//         {
//             w: 128,
//             h: 160,
//         }
//     ]

// }

function setToday() {
	var now = new Date();
	var month = now.getMonth();
	var year = now.getYear();
	document.Control.month.selectedIndex = month;
	document.Control.year.selectedIndex = year - 1900;
	formCalendar(month, year);
}
function setPrev() {
	var month = document.Control.month.selectedIndex - 1;
	document.Control.month.selectedIndex = month;
	var year = document.Control.year.selectedIndex + 1900;
	formCalendar(month, year);
}
function setNext() {
	var month = document.Control.month.selectedIndex + 1;
	document.Control.month.selectedIndex = month;
	var year = document.Control.year.selectedIndex + 1900;
	formCalendar(month, year);
}
function selectDate() {
	var year = document.Control.year.selectedIndex + 1900;
	var month = document.Control.month.selectedIndex;
	formCalendar(month, year);
}

function getDaysInMonth(_month, _year) {
	var days;
	var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	days = daysInMonth[_month];
	if (_month == 2 && isLeapYear(_year)) days = 29;
	return days;
}

function isLeapYear(Year) {
	if ((Year % 4 == 0 && Year % 100 != 0) || Year % 400 == 0) return true;
	else return false;
}
function formCalendar(month, year) {
	month = parseInt(month);
	year = parseInt(year);
	D = new Date(year, month, 0);
	var temp;
	temp =
		"<TABLE ID='calTab' cellspacing=0 cellpadding=0 border=0 style='font-family: serif;'>";
	temp += "<TBODY ID='calBody' align='center'>";
	temp +=
		"<TR><TD width=25 height=25>Вс<TD width=25>Пн<TD width=25>Вт<TD width=25>";
	temp += "Ср<TD width=25>Чт<TD width=25>Пт<TD width=25>Сб</TR><TR>";
	var n = D.getDay();
	temp += "<TD> &nbsp</TD>";
	for (i = 0; i < n; i++) {
		temp += "<TD>&nbsp</TD>";
	}
	var num = getDaysInMonth(month, year);
	for (i = 1; i <= num; i++) {
		if ((i + n) % 7 || !i) temp += "<TD height=20>" + i + "</TD>";
		else temp += "<TD>" + i + "</TD></TR><TR>";
	}
	D = new Date(year, month, num - 1);
	num = D.getDay();
	for (i = num; i < 6; i++) {
		temp += "<TD>&nbsp</TD>";
	}
	temp += "</TR></TBODY></TABLE>";
	document.all["calTab"].outerHTML = temp;
}
