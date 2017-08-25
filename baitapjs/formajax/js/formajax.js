/*
 * Feature FormAjax
 * Auth: Thanh Loi
 * Idea: Check all value of input. Event Onkeyup for input type text
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
 		check_password.innerHTML = "Passwork length min 8 letter!!!";
 		return false;
 	}
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
 	return true;
}

/*
 * Check Input birthday Correct or InCorrect
 */
function checkInputBirthday() {
	var txb_birthday = document.getElementsByName("birthday")[0].value;
 	var check_birthday = document.getElementById("error_birthday");
 	check_birthday.innerHTML = "";
}

/**
 * Check special character `~!#$%^&*()+=[{]}\'<,>?/";:
 * @param {String} strcheck is format
 * @return {boolean} true if strcheck correct else return false
 */
function isSpecialCharacterRegExp(strcheck) {
	// special character 
	var rule = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
	var checkRegex = new RegExp(rule);
	// Check have specical character
	if (!checkRegex.test(strcheck)) {
		return false;
	}
	return true;
}
