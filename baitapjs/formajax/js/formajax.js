/*
 * Feature FormAjax
 * Auth: Thanh Loi
 * Idea: Check all value of input. Event onchange for input type text
 */



/*
 * Check Input USERNAME Correct or InCorrect
 * @return {boolean} false: incorrot username, true: corret username
 */
 function checkInputUserName() {
 	var txb_useruame = document.getElementsByName("username")[0].value;
 	var check_username = document.getElementById("error_username");
 	check_username.innerHTML = "";
 	if (txb_useruame.length < 8) {
 		check_username.innerHTML = "Username length min 8 letter!!!";
 		return false;
 	}
 	if (txb_useruame.length > 25) {
 		check_username.innerHTML = "Username length max 25 letter!!!";
 		return false;
 	}
 	if (isSpecialCharacterRegExp(txb_useruame)) {
 		check_username.innerHTML = "Do not accept special characters";
 		return false;
 	}
	/*
	 * //Ajax check username in database
 	 * var url = "formvalidate.php?usernamex=" + txb_useruame;
 	 * ajaxFeature("error_username",url);
 	 */
	check_username.innerHTML = "OK";
 	return true;
 }

/*
 * Check Input Passwork Correct or InCorrect
 */
function checkInputPassword() {
	var txb_password = document.getElementsByName("password")[0].value;
 	var check_password = document.getElementById("error_password");
 	check_password.innerHTML = "";
 	if (txb_password.length < 8) {
 		check_password.innerHTML = "Password length min 8 letter!!!";
 		return false;
 	}
 	if (txb_password.length > 30) {
 		check_password.innerHTML = "Password length max 30 letter!!!";
 		return false;
 	}
 	check_password.innerHTML = "OK";
 	return true;
}

/*
 * Check Input Email Correct or InCorrect
 */
function checkInputEmail() {
	var txb_email = document.getElementsByName("email")[0].value;
 	var check_email = document.getElementById("error_email");
 	// Before @, Just a->z A->Z 0->9 and ._-.
 	var regexp_email = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,6}$");
 	check_email.innerHTML = "";
 	if (!regexp_email.test(txb_email)) {
 		check_email.innerHTML = "Email not format!!!";
 		return false;
 	}
 	check_email.innerHTML = "OK";
 	return true;
}

/*
 * Check Input birthday Correct or InCorrect
 */
function checkInputBirthday() {
	var txb_birthday = document.getElementsByName("birthday")[0].value;
 	var check_birthday = document.getElementById("error_birthday");
 	check_birthday.innerHTML = "";
 	var rule = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
 	var regexp_birthday = new RegExp(rule);
 	if(!regexp_birthday.test(txb_birthday)) {
        check_birthday.innerHTML = "Birthday Fomat InCorrect";
        return false;
 	}
 	check_birthday.innerHTML = "OK";
 	return true;
    
}

/**
 * Check special character `~!#$%^&*()+=[{]}\'<,>?/";:
 * @param {String} strcheck is format
 * @return {boolean} true if strcheck correct else return false
 */
function isSpecialCharacterRegExp(strcheck) {
	// special character 
	var rule = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
	var check_Regex = new RegExp(rule);
	// Check have specical character
	if (!check_Regex.test(strcheck)) {
		return false;
	}
	return true;
}

/*
 * Click REFRESH All input empty
 */
 function clickRefresh() {
 	var input_list = document.getElementsByTagName("input");
 	var i;
 	for (i = 0; i < input_list.length; i++) {
 		input_list[i].value = "";
 	}
 	document.getElementById("error_username").innerHTML = "";
	document.getElementById("error_password").innerHTML = "";
	document.getElementById("error_email").innerHTML = "";
	document.getElementById("error_birthday").innerHTML = "";
 }

/*
 * click button submit -> Ajax to formvalidate.php
 * check if username exist then return false (show error)
 */
 function clickSubmit() {
 	document.getElementById("txtHint").innerHTML = "";
 	//check all input
 	if (checkInputUserName() && checkInputPassword() && checkInputEmail() && checkInputBirthday()) {
 		var value_username = document.getElementsByName("username")[0].value;
 		var value_password = document.getElementsByName("password")[0].value;
 		var value_email = document.getElementsByName("email")[0].value;
 		var value_birthday = document.getElementsByName("birthday")[0].value;
 		var url = "formvalidate.php?username=" + value_username + "&password=" +
 		value_password + "&email=" + value_email + "&birthday=" + value_birthday;
 		//Ajax Submit. Validation Form In PHP
		//ajaxFeature("txtHint",url);
 	}
 }

 /*
  * Function ajax
  */
  function ajaxFeature(id_show,url_php) {
  	if (window.XMLHttpRequest) {
 			xmlhttp = new XMLHttpRequest();
 		} else {
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		}
 		xmlhttp.onreadystatechange = function() {
 			if (this.readyState == 4 && this.status == 200) {
 				document.getElementById(id_show).innerHTML = this.responseText;
 			} else {
 				document.getElementById("txtHint").innerHTML = "Not Connect to Server";
 			}
 		};
 		xmlhttp.open("GET",url_php,true);
 		xmlhttp.send();
  }