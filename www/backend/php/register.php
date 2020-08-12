<?php
require_once('connect.php');

$email = $_POST['cu_email'];
$username = $_POST['cu_uname'];
$password = base64_encode($_POST['cu_pass']);

$CheckName = $con->query("SELECT * FROM `tbl_customer` WHERE cu_uname = '$username'");
if(mysqli_num_rows($CheckName)>0){
	echo json_encode(array('response'=>'UsernameError'));
}else{
	$CheckEmail = $con->query("SELECT * FROM `tbl_customer` WHERE cu_email = '$email'");
	if(mysqli_num_rows($CheckEmail)>0){
		echo json_encode(array('response'=>'EmailError'));
	}else{
		$Register = $con->query("INSERT INTO `tbl_customer` (`cu_recno`, `cu_email`, `cu_uname`, `cu_pass`) VALUES (NULL, '$email', '$username', '$password');");
		if($Register){
			echo json_encode(array('response'=>'Success'));
		}else{
			echo json_encode(array('response'=>'Failed'));
		}

	}
}


















?>