

<html>
<title>Question_Papers_Retrival</title>
<body style="background-color:#eee2dc">


  
        <center>
         <img src='images/logo2.png' height="130px" width="100%"> 
        <p class="Pqp">Previous Question Papers</p>
      </center>
  
  
</body>
</html>
<style>
.Pqp
{
  /*font-family: Verdana, Arial, Tahoma, Serif;*/
  font-family:Open Sans,Arial,sans-serif;
  font-size:35px;
  color:#1a0d00;
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
.headerbar
{
  width: 100%;
    height: 125px; 
    background-color:white;
}     

a:link {color: red;}

a:visited {color: green;}

a:hover {color: hotpink;}

a:active {color: blue;}
    
table 
      {
        border-collapse:collapse;
        border: 2px solid ;
        width: 50%;
        background-color:lemon;
        font-family: "Times New Roman", Times, serif;
        font-size:20px;
        
      }

</style>


<?php
$fname="no_file_name";
$ssubject="no_subject";
$bbranch="no_branch";
if(isset($_POST["submit"]))
  {
    $sbranch = $_POST["branch"];
    $syear = $_POST["year"];
    $ssubject = $_POST["subject"];

  }
 $fname=$syear."/".$ssubject;
 echo $fname;
// This will return all files in that folder
$files = scandir($fname);

?>
   
    
<table align="center" border="1">
    <tr>
      <th>S.No</th>
            <th>Name</th>
            <th>view</th>
            <th>download</th>
    </tr>
  <?php
    $i=1;
      // output data of each row
     for ($a = 2; $a < count($files); $a++) 
      {
  ?>

    <tr>
      <td>
        <?php echo $i; ?>
      </td>
      <td>
        <?php  echo $files[$a];?> 
            </td>
      <td>  
        <a href="<?php echo $fname."/".$files[$a]; ?>" target="_blank"> view  </a>
            </td>
      <td>
                <a href="<?php $fname."/".$files[$a]; ?>" download="<?php echo $files[$a]; ?>"> download  </a>  
            </td>
    </tr>
  <?php
    $i++;
      } 
  ?>
    </table>
    <br>
    <br>

<center>
    <a href="index.html"><button>Back</button></a>
</center>


