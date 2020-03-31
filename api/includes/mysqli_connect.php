<?php

// connect to databse
$conn = mysqli_connect("localhost", "root", "123", "mypage");
    
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>