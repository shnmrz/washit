<?php 
	DEFINE("USERNAME","root");
	DEFINE("PASSWORD","");
	DEFINE("SERVER","localhost");
	DEFINE("DATABASE","washit_app");

$con = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE);
 	// if($con){
 	// 	echo ' <script>alert("Connected")</script>';
 	// }else{
 	// 	echo ' <script>alert("Not")</script>';
 	// }
 ?>