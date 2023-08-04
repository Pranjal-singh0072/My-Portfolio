<?php
$servername="localhost";
$username="root";
$password="";
$db="Aryanportfolio";
$conn=mysqli_connect($servername,$username,$password,$db);
if($conn){
    echo"connection done";
}else
{
    echo"Failed";

}
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $result=mysqli_query($conn, "Insert into feedback values('', '$name', '$email', '$subject', '$message') ");
    if($result){
       // echo"Feedback Submitted";
  header('location:index.html');
    }else{
        die(mysqli_error($result));
    }
}

 ?>