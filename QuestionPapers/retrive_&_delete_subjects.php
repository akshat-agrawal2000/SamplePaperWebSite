<?php
session_start();
?>
<style>

			h3
			{
				background-color:tomato;
			}
			
			#body
			{
				position:absolute;
				top:20%;
				left:30%;
				right:30%;
				height:60%;
				width:40%;
				background-color:;
			}
			
			table 
			{
				border-collapse:collapse;
				border: 2px solid ;
				width: 50%;
				background-color:lemon;
				font-family: "Times New Roman", Times, serif;
				font-size:20px;
				
			}

			.btn1
				 {
				  border-radius: 10px;
				  background-color: #cc33ff;
				  width: 200px;
				  text-align:center;
				  height: 50px;
				  font-weight:999;
				 }

</style>


	<div class="overlay1">
	  		<center>
				 <img src='images/logo2.png' height="130px" width="100%"> 

			</center>
	</div>


<?php
if($_SESSION["name"]) {
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

	$sql = "SELECT * FROM subjects";
	$result = mysqli_query($conn, $sql);


	if (mysqli_num_rows($result) > 0) 
	{
	?>
	
		<h3 align="center">Subjects List</h3>
<a href="logout.php"><button class="btn1" style="float: left;">Logout</button></a>
		<table align="center" border="1">
			<tr>
				<th>S.NO.</th>
				<th>Year</th>
				<th>Branch</th>
				<th>Subject</th>
				<th>Delete</th>
				
				
				
			</tr>
	<?php
		$i=1;
	    // output data of each row
	    while($row = mysqli_fetch_assoc($result)) 
	    {
	?>
		<tr>
			<td>
				<?php echo $i?>	
        	</td>
			
			<td>
				<?php echo $row["year"]?>	
        	</td>

			<td>	
				<?php echo $row["branch"]?>
        	</td>

			<td>
				<?php echo $row["subject_name"]?>	
        	</td>
        	
        <td><a href="delete.php?subject_name=<?php echo $row["subject_name"]; ?>"><button color=blue>Delete</button></a>
        </td>
			
        	
        	
		</tr>
	<?php
		$i++;
	    }	
	?>
		</table>
	<?php	
	} 
	else 
	{
    		echo "0 results";
	}
	mysqli_close($conn);

?>
Click here to <a href="logout.php" tite="Logout">Logout.
	
<?php
}else echo "<h1>Please login first .</h1>";
?>