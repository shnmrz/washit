<?php  
require_once("./connect.php");
$list = array();
$id = $_GET['id'];
$sql = "SELECT * FROM works WHERE id='$id'";
$query = $db->query($sql);
while($rows = mysqli_fetch_assoc($query)){
	$list = $rows;
}

echo json_encode($list);
?>