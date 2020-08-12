<?php 
session_start();
require_once('connect.php');

$list = array();
$username = $_POST['cu_uname'];
$password = base64_encode($_POST['cu_pass']);
$sql = mysqli_query($con, "SELECT * FROM tbl_customer WHERE cu_uname = '$username' AND cu_pass = '$password'");
if(mysqli_num_rows($sql) > 0){
	while($rows = mysqli_fetch_assoc($sql)){
		$list = $rows;
	}
	echo json_encode($list, JSON_PRETTY_PRINT);
}else{
	echo json_encode(array('response' => 'no account'));	
}

?>