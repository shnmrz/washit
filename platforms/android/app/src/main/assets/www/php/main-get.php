<?php  
require_once("connect.php");

$list=array();
if(isset($_GET['viewJobs'])){
	$sql=$conn->query("SELECT * FROM works");
}


while($rows=mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}
echo json_encode($list);
?>