/*
	Feature Calendar
	Auth: Nguyen Thanh Loi
*/

var now = new Date();
var curMon = now.getMonth();
var curDay = now.getDate();
var curYear = now.getFullYear();
var arrWeekdays = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Web"];
var calendar = document.getElementsByTagName("td"); 
var demo = document.getElementById("demo");
createCalendar(curYear,curMon);


//function create calendar
function createCalendar(valueYear,valueMon) {

	var firstDay = new Date(valueYear,valueMon,1).getDay();
	var lastDate = new Date(valueYear,valueMon+1,0).getDate();
	var i;
	var iDay = 13 + firstDay;
	for (i = 1; i <= lastDate; i++) {
		calendar[iDay].innerHTML = i;
		iDay++;
	}
	demo.innerHTML = lastDate;

}