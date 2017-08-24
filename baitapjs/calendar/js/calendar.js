/*
 *Feature Calendar
 *Auth: Nguyen Thanh Loi
 *Idea: write 1 function create calendar follow to value put in
 *year , month.
 */
var now = new Date();
var cur_Mon = now.getMonth();
var cur_Day = now.getDate();
var cur_Year = now.getFullYear();
var calendar = document.getElementsByTagName("td");
var demo = document.getElementById("demo");
var show_Year = document.getElementById('select_year');
var show_Month = document.getElementById('select_month');
createCalendar(cur_Year, cur_Mon);
slYear();
chooseDay();

/*
 *Create alendar follow to Year , Month put in function
 *@param valueYear: year
 *@param valueMon: Month
 */
function createCalendar(valueYear, valueMon) {
    parseInt(valueYear);
    parseInt(valueMon);
    var firstDay = new Date(valueYear, valueMon, 1).getDay(); // First Day Of Month
    var lastDate = new Date(valueYear, valueMon + 1, 0).getDate(); // Total Day Of Month
    var i;
    var iDay = 13 + firstDay; // Location start show, 13 is first location show calendar
    for (i = 13; i < 55; i++) {//Create calendar empty
        calendar[i].innerHTML = "";
        calendar[i].style.background = "white";
    }
    for (i = 1; i <= lastDate; i++) {//Write calendar
        calendar[iDay].innerHTML = i;
        iDay++;
    }
    if (valueYear === now.getFullYear()) {//Show Time Current
        if (valueMon === now.getMonth()) {
            cDay = 12 + firstDay + now.getDate();
            calendar[cDay].style.background = "red";
        }
    }
    curTime();
}

/*
 *Event Click < or > : Prev or Next Month
 */
function btnMon(valueMon) {
    cur_Mon = parseInt(cur_Mon) + parseInt(valueMon);
    if (cur_Mon < 0) {
        cur_Mon = 11;
        cur_Year -= parseInt(1);
    }
    if (cur_Mon > 11) {
        cur_Mon = 0;
        cur_Year += parseInt(1);
    }
    createCalendar(cur_Year, cur_Mon);
}

/*
 *Event Click << or >> : Prev or Next Year
 */
function btnYear(valueYear) {
    cur_Year = parseInt(cur_Year) + parseInt(valueYear);
    createCalendar(cur_Year, cur_Mon);
}

/*
 *Show Year for Select Year
 */
function slYear() {
    var i;
    for (i = 1970; i < 2100; i++) {
        show_Year.innerHTML += "<option value='" + i + "'>" + i + "</option";
    }
    createCalendar(cur_Year, cur_Mon);
}

/*
 *Click Year. Value Year -> Calendar Year
 */
function pickYear() {
    cur_Year = parseInt(show_Year.value);
    createCalendar(cur_Year, cur_Mon);
}

/*
 *Click Month. Value Month -> Calendar Month of Year
 */
function pickMon() {
    cur_Mon = parseInt(show_Month.value);
    createCalendar(cur_Year, cur_Mon);
}

/*
 *Current Month , Year Select;
 */
function curTime() {
    show_Year.value = cur_Year;
    show_Month.value = cur_Mon;
}

/* Chose Day */
function chooseDay() {
    var show_DMY = document.getElementById('show_DMY');
    var i;
    for (i = 13; i < 50; i++) {
        calendar[i].addEventListener("click", function() {
            var dayCheck = this.innerHTML;
            if (dayCheck != "") {
                show_DMY.value = dayCheck + "/" + (cur_Mon + 1) + "/" + cur_Year;
            }
        });
    }
}