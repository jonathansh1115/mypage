<?php

// connect to databse
$conn = mysqli_connect("sql307.epizy.com", "epiz_25299129", "qVXHoydXJPJ", "epiz_25299129_mypage");
    
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>