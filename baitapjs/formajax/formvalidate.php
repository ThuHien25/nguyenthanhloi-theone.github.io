<?php

include 'CheckValidate.php'; 


$check_Username = new CheckValidate();

// Search username in database
if (isset($_GET['usernamex'])) {
	$username = $_GET['usernamex'];
	$tmp = $check_Username->checkUsername($username);
	if ($tmp == 0) {
		echo "Username already exists";
	} else {
		echo "Username available";
	}
}

// Check All value input
if (isset($_GET['username']) && isset($_GET['password']) && isset($_GET['email']) && isset($_GET['birthday'])) {
	$username = $_GET['username'];
	$password = $_GET['password'];
	$email = $_GET['email'];
	$birthday = $_GET['birthday'];
	//Check Input.  Get Value 0: false, 1: true
	$bl_user = $check_Username->validationUsername($username);
	$bl_pass = $check_Username->validationPassword($password);
	$bl_email = $check_Username->validationEmail($email);
	$bl_birth = $check_Username->validationBirthday($birthday);
	$bl_is_user = $check_Username->checkUsername($username);

	if ($bl_user == 0 || $bl_pass == 0 || $bl_email === 0 || $bl_birth == 0 || $bl_is_user == 0) {
		echo "Submit failed";
	} else {
		echo "Submit successful";
	}
}

mysql_close($con);