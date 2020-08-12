<?php
require_once('connect.php');

$task = $_POST['task'];

switch ($task) {
	case 'display':

	$sql = $conn->query("SELECT * FROM ajax_table");
	$result = $sql->fetch_all(MYSQLI_ASSOC);
	echo json_encode($result);
	break;

	case 'register':
	$email          =   $_POST['cu_email'];
	$uname          =   $_POST['cu_uname'];
	$pass           =   $_POST['cu_pass'];

	$sql = $conn->query("INSERT INTO tbl_customer (cu_email, cu_uname, cu_pass, cu_phonenum, cu_fname, cu_mname, cu_lname, cu_ename, cu_address) VALUES ('$email','$uname','$pass','$phonenum','$firstname','$middlename','$lastname','$extname','$address') ";
	break;

	case 'delete':
	$id = $_POST['id'];	

	$sql = $conn->query("DELETE FROM ajax_table WHERE id='$id'");
	echo json_encode(array('response'=>"Success"));
	break;

	case 'display_area':
	$id = $_POST['id'];

	$sql = $conn->query("SELECT * FROM ajax_table WHERE id='$id'");
	$result = $sql->fetch_all(MYSQLI_ASSOC);
	echo json_encode($result);
	break;

	case 'update':
	$id = $_POST['id'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$age = $_POST['age'];

	$sql = $conn->query("UPDATE ajax_table SET id='$id', first_name='$fname', last_name='$lname', age='$age' WHERE id='$id'");
	break;
}
?>