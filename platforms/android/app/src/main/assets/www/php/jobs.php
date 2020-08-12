<?php  
require_once("./connect.php");

$list = array();

$sql = "SELECT * FROM works WHERE available >= 1";
$query = $db->query($sql);


while($rows = mysqli_fetch_assoc($query)){
	$list[] = $rows;
}

echo json_encode($list, JSON_PRETTY_PRINT);
?>