/* value id1 id2 id3 . show id */
var open1 = true;
var open2 = false;
var open3 = false;
/* function show content and change icon */
function clickopen(id) {
	var i = id;
	switch(i) {
		case 1:
			if (open1) {
				
				document.getElementById("ct-1").style.display = "none"; // hidden content
				document.getElementById("ic-1").style.backgroundPosition = "bottom"; // change icon
				open1 = false; //value close
			} else {
				document.getElementById("ct-1").style.display = "block"; // hidden content
				document.getElementById("ic-1").style.backgroundPosition = "top"; // change icon
				open1 = true; //value open
			}
			break;
		case 2:
			if (open2) {
				document.getElementById("ct-2").style.display = "none"; // hidden content
				document.getElementById("ic-2").style.backgroundPosition = "bottom"; // change icon
				open2 = false; //value close
			} else {
				document.getElementById("ct-2").style.display = "block"; // hidden content
				document.getElementById("ic-2").style.backgroundPosition = "top"; // change icon
				open2 = true; //value open
			}
			break;
		case 3:
			if (open3) {
				document.getElementById("ct-3").style.display = "none"; // hidden content
				document.getElementById("ic-3").style.backgroundPosition = "bottom"; // change icon
				open3 = false; //value close
			} else {
				document.getElementById("ct-3").style.display = "block"; // hidden content
				document.getElementById("ic-3").style.backgroundPosition = "top"; // change icon
				open3 = true; //value open
			}
			break;
	}
}