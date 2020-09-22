<?php
$servername = "localhost";
	$username = "root";
	$password = "";
	$db = "admin";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password,$db);

	// Check connection
	if (!$conn) 
	{
	    die("Connection failed: " . mysqli_connect_error());
	}

$sql = "DELETE FROM subjects WHERE subject_name='" . $_GET["subject_name"] . "' ";
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
mysqli_close($conn);
header("Location:retrive_&_delete_subjects.php");
?>