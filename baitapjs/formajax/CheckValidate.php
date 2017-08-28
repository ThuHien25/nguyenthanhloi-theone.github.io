<?php

include 'Connect.php';

class CheckValidate
{
	/*
	 * Check in the username already exists in the database.
	 * @param {string} $username: Userame
	 */
	public function checkUsername($username)
	{
		$sql = "SELECT * FROM user WHERE username='".$username."'";
		$sql_result = mysql_query($sql) or die (mysql_error());
		$row = mysql_fetch_row($sql_result);

		// Check database have username
		if ($row[0]) {
		    return false;
		} else {
		    return true;
		}
	}

	/*
	 * Is the username in the correct format?
	 * @param {string} $username: Userame
	 */
	public function validationUsername($username)
	{
		if (strlen($username) < 8) {
			return false;
		}
		if (strlen($username) > 25) {
			return false;
		}
		if (!preg_match("/^[a-zA-Z0-9.-]*$/", $username)) {
			return false;
		}
		return true;
	}

	/*
	 * Is the password in the correct format?
	 * @param {string} $password: password
	 */
	public function validationPassword($password)
	{
		if (strlen($password) < 8) {
			return false;
		}
		return true;
	}

	/*
	 * Is the Email in the correct format?
	 * @param {string} $Email: Email
	 */
	public function validationEmail($email)
	{
		if (!preg_match("/([\w\-\.]+\@[\w\-]+\.[\w\-]+)/", $email)) {
			return false;
		}
	}

	/*
	 * Is the birthday in the correct format?
	 * @param {string} $birthday: birthday
	 */
	public function validationBirthday($birthday)
	{
		$arr_date  = explode('/', $birthday);
		return (checkdate($arr_date[1], $arr_date[0], $arr_date[2]));
	}
}