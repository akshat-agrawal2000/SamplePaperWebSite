<?php
session_start();
$message="";
if(count($_POST)>0) {
 $con = mysqli_connect('127.0.0.1:3306','root','','admin') or die('Unable To connect');
$result = mysqli_query($con,"SELECT * FROM login_user WHERE user_name='" . $_POST["user_name"] . "' and password = '". $_POST["password"]."'");
$row  = mysqli_fetch_array($result);
if(is_array($row)) {
$_SESSION["id"] = $row['id'];
$_SESSION["name"] = $row['name'];
} else {
$message = "Invalid Username or Password!";
}
}
if(isset($_SESSION["id"])) {
header("Location:retrive_&_delete_subjects.php");
}
?>
<html>
<head>
<title>User Login</title>
</head>
<body>

<div class="simpleslide100">
    <div class="simpleslide100-item bg-img1" style="background-image: url('images/bg6.jpg'); opacity:0.89"></div>
  </div>
  <div class="overlay1">
        <center>
         <img src='images/logo2.png' height="130px" width="100%"> 

      </center>
  </div>
  
<center>
<div class="size1 overlay1">
  <p 
  class="Pqp">Admin Login</p>


<form name="frmUser" method="post" action="" align="center">
<div class="message"><?php if($message!="") { echo $message; } ?></div>


 <input class="it" type="text" name="user_name" placeholder="User Name">
 <br>
<input  class="it" type="password" name="password" placeholder="Password">
<br><br>
<input class="btn" type="submit" name="submit" value="Submit">
<input class="btn" type="reset">
</form>
</body>
</html>
<style>

 .it
 {
  border-radius: 10px;
  margin: 15px;
text-align-last:center;
    width: 150px;
    height: 50px;
    background-color:;
    font-weight:800;
 }
 
 

 .btn
 {
  border-radius: 40px;
  background-color: yellow;
  width: 150px;
  text-align:center;
  height: 50px;
  font-weight:999;
 }
 
.Pqp
{
  font-family: Verdana, Arial, Tahoma, Serif,bold;
  
  font-size:40px;
  color:white;
  text-anchor:bold;
  
}
.simpleslide100 {
  display: block;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.simpleslide100-item {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.bg-img1 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.size1 {
  width: 100%;
  min-height: 100vh;
}
.overlay1 {
  position: relative;
  z-index: 1;
}

</style>